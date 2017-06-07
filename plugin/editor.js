(function( $ ){
	var editorObj;
	var methods = {
		saveSelection: function(_this) {
			if(!_this) {
				_this = this;
			}
			$(_this).data('editor').focus();
		    if (window.getSelection) {
		        sel = window.getSelection();
		        if (sel.getRangeAt && sel.rangeCount) {
		            $(_this).data('currentRange', sel.getRangeAt(0));
		        }
		    } else if (document.selection && document.selection.createRange) {
		        $(_this).data('currentRange',document.selection.createRange());
		    }
		    else
		    	$(_this).data('currentRange', null);
		},

		restoreSelection: function(text,mode) {
			//Function to restore the text selection range from the editor
			var node, t = this;
			typeof text !== 'undefined' ? text : false;
			typeof mode !== 'undefined' ? mode : "";
			var range = $(this).data('currentRange');
		    if (range) {
		        if (window.getSelection) {
		        	if(text){
		            	range.deleteContents();
		            	if(mode=="html") {
    			            var el = document.createElement("div");
				            el.innerHTML = text;
				            var frag = document.createDocumentFragment(), node, lastNode;
				            while ( (node = el.firstChild) ) {
				                lastNode = frag.appendChild(node);
				            }
				            range.insertNode(frag);
	            		}
		            	else {
            				range.insertNode( document.createTextNode(text) );
		            	}

		            }
		            sel = window.getSelection();
		            sel.removeAllRanges();
		            sel.addRange(range);
		        }
		        else if (document.selection && range.select) {
		            range.select();
		            if(text)
		            {
		            	if(mode=="html")
		            		range.pasteHTML(text);
		            	else
		            		range.text = text;
		            }
		        }
		    }
		},

		init : function(options) {
			var menuItems = { 
				'insert_link': { 
					"modal": true,
					"create": true,
   					"modalId": "insertLink", 
					"text":"外链", 
					"tooltip": "Insert Link", 
					"modalHeader": "引入外链地址",
					"modalBody": $('<div/>',{   class:"form-group"}).append($('<div/>',{
												id :"errMsg"
											})).append($('<input/>',{
												type:"text",
												id:"inputText",
												class:"form-control form-control-link ",
												placeholder:"请输入连接文字",
											})).append($('<input/>',{
												type:"text",
												id:"inputUrl",
												required:true,
												class:"form-control form-control-link",
												placeholder:"请输入URL地址"
											})),
					"beforeLoad":function(){ 
						editorObj = this;
						$('#inputText').val("");
						$('#inputUrl').val("");
						$(".alert").alert("close");
						if($(editorObj).data('currentRange')!=''){ 
							$('#inputText').val($(editorObj).data('currentRange'));
						}
					},
					"onSave":function(){
						var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
						var targetText = $('#inputText').val();
						var targetURL  = $('#inputUrl').val();
						var range      = $(editorObj).data('currentRange');
						if(targetURL ==''){
							methods.showMessage.apply(editorObj,["errMsg","请输入URL地址"]);
							return false;
						}												
						if(!targetURL.match(urlPattern)){
							methods.showMessage.apply(editorObj,["errMsg","请输入正确的URL地址"]);
							return false;
						}											
						if(range=='' && targetText==''){ 
							targetText =targetURL;	
						}
						if(navigator.userAgent.match(/MSIE/i)){	
							var targetLink='<a href="'+targetURL+'" target="_blank">'+targetText+'</a>';
							methods.restoreSelection.apply(editorObj,[targetLink,'html']);
						}
						else{
						    methods.restoreSelection.apply(editorObj, [targetText]);																																		
							document.execCommand('createLink',false,targetURL);
							document.execCommand('Unselect');
						}
						$(editorObj).data("editor").find('a[href="'+targetURL+'"]').each(function(){ $(this).attr("target", "_blank"); });
						$(".alert").alert("close");
						$("#insertLink").modal("hide");
						$(editorObj).data("editor").focus();
						return false;
					}
				},
				'insert_book': {
					"modal": true,
					"create": false,
					"modalId": "citeSource1", 
					"text":"内链",
					"tooltip": "Insert Book",
					"beforeLoad":function(){ 
						editorObj = this;
					},
					"onSave":function(){
						srcAddr = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAgCAYAAADjaQM7AAAB0ElEQVR42mNwW595z3xl7D+TFVGk4p/GyyLbGIDAe0uFYOyuapP9+/ezMOAD5qti/5muiP5PFl4efRVmjuu6jDNlB3od////z4jTMpArqWGZ6YqYv+4bsi+1np6jQwfLIGI+m/IezL25RYkBmw+pbRkIe27MvlhyuNscI0hpYRkoSIEWnuo8PluTDpZBsN/m/Hv7X12RoItlkDjMPVtxbJIhOEhpbZn5ypg/Huuz9gSuKxGjmmUq2zzZcWGtVaFsFAej/drk91Mvrko+8/8MKwMxgBLLzFfE/vfZmPvUelXCfJPl0dNx4hVRM0CYsmAkEeO2bHn0D4sVseeA7OPEYmCBftZsRcx3ki0zWxl7c9LtJXwMJID6E0v4zFZE3yTZMouVsXcnn1suRYplnefmSoH0kR6MdI0zeloGjOxnAZsKAoyXR5gTi3235vlbrIx7SrrPVkZfrf9fz0RSAqmvZwKVKqT7bEXsG8e1KVUmKyLTicWO61MrgWXh68EdZ+AW1PKoH8Bg+U4KNlkR/Zf0fLYq9nbPzWUipMRZz5mZIsCEdXtwW0bXYBy+JQhNLAMS9LPMbk3SD3pY5Lou/T9DzI7qNc7r0mhqkQvQ/KgdFeUAPyxUizKd9ioAAAAASUVORK5CYII=';
						if(navigator.userAgent.match(/MSIE/i)){	
							var targetLink='<img src="'+srcAddr+'" tag="123" />';
							methods.restoreSelection.apply(editorObj,[targetLink,'html']);
						}
						else{																																	
							document.execCommand('InsertImage',false, srcAddr);
							$(editorObj).data("editor").find('img:last').attr("tag", "123");
						}
						$("#citeSource1").modal("hide");
						$(editorObj).data("editor").focus();
						return false;
					}
				}
			};

			var settings = $.extend({
				'insert_link':true,
				'insert_book':true			
			},options);

	       	var containerDiv = $("<div/>",{ class : "row-fluid editor-container" });
			var $this = $(this).hide();	       	
	       	$this.after(containerDiv); 

	       	var menuBar = $( "<div/>",{ id : "menuBarDiv", class : "menu-bar row-fluid"}).prependTo(containerDiv);
	       	var editor  = $( "<div/>",{	class : "editor-area", css : {overflow: "auto"}, contenteditable:"true"}).appendTo(containerDiv);
	       	$(this).data("menuBar", menuBar);
	       	$(this).data("editor", editor);

	       	for(var item in menuItems){
	       		var menuItem = methods.createMenuItem.apply(this,[menuItems[item], settings[item],true]);
	       		menuBar.append(menuItem);       		
	       	}
	     	editor.on('click', function(e) {
	     		var t = $(e.target), href='';
	     		e.stopPropagation();
	     		if(t.is('a')) {
	     			href = t.attr('href');
	     			if(href != '') {
	     				window.open(href);
	     			}
	     		}
	     	})
		},
		createModal: function(create, modalId, modalHeader, modalBody, onSave){		
			var modalElement = null, modalTrigger = $('<a/>',{href:"#"+modalId,role:"button",class:"btn btn-default","data-toggle":"modal"});
			if(create) {
				var modalElement = $('<div/>',{ id: modalId, class: "modal fade", tabindex: "-1",
				              role: "dialog",
				              "aria-labelledby":"h3_"+modalId,
				              "aria-hidden":"true"
				          }).append($('<div>',{class:"modal-dialog"}).append($('<div>',{class:"modal-content"}).append($('<div>',{
				           			class:"modal-header"
				           			}).append($('<button/>',{
					                	type:"button",
					                	class:"close",
					                	"data-dismiss":"modal",
					                	"aria-hidden":"true"
					               		}).html('x')
				            		).append($('<h3/>',{
				                		id:"h3_"+modalId
				           				}).html(modalHeader))
				         		).append($('<div>',{
				           			class:"modal-body"
				           			}).append(modalBody)
				          		).append($('<div>',{
				            		class:"modal-footer txt-ctr"
				         			}).append($('<button/>',{
				                		"type":"button","class":"btn btn-redif btn-green-frame mgr-r16",
				                		"data-dismiss":"modal",
				                		"aria-hidden":"true"
				               			}).html('取消')
			           	  			).append($('<button/>',{
			                			type:"button",
			                			class:"btn btn-redif btn-green",
			               				}).html('确定').mousedown(function(e){
			                			e.preventDefault();
			               				}).click(function(obj){return function(){onSave.apply(obj)}}(this)))
							  		)
								));	
				modalElement.appendTo("body");
			}
			else {
				var _model = $('#'+modalId);
				_model.find('button[tag="save"]').on('click', function(e) {
					onSave.apply(e);
				})
			}
			return modalTrigger;
		},

		createMenuItem: function(itemSettings, options, returnElement){
			typeof returnElement !== 'undefined' ? returnElement : false;
		    if(itemSettings["modal"]){
		    	var menuWrapElement = methods.createModal.apply(this,[itemSettings["create"], itemSettings["modalId"], itemSettings["modalHeader"], itemSettings["modalBody"], itemSettings["onSave"]]);		    			    	
		    	var menuElement = $("<i/>");
				menuElement.html(itemSettings["text"]);
				menuWrapElement.append(menuElement);
				menuWrapElement.mousedown(function(obj, methods, beforeLoad){
					return function(e){
						e.preventDefault();
						methods.saveSelection.apply(obj);
						if(beforeLoad){		    	    
							beforeLoad.apply(obj); 					
				    	}
					}
				}(this, methods,itemSettings["beforeLoad"]));
				menuWrapElement.attr('title', itemSettings['tooltip']);
				return menuWrapElement;
		    }
			else{
				var menuWrapElement = $("<a/>",{href:'javascript:void(0)', class:'btn btn-default'});
				var menuElement = $("<i/>");
				menuElement.html(itemSettings["text"]);
				var action = "click";
			}
			menuWrapElement.attr('title', itemSettings['tooltip']);
			menuWrapElement.css('cursor', 'pointer');
			menuWrapElement.append(menuElement);
			if(returnElement)
				return menuWrapElement;
			$(this).data("menuBar").append(menuWrapElement);
		},
		showMessage: function(target,message){
			var errorDiv=$('<div/>',{ class:"alert alert-danger"}).append($('<button/>',{
									type:"button",
									class:"close",
									"data-dismiss":"alert",
									html:"x"
				})).append($('<span/>').html(message));
			errorDiv.appendTo($('#'+target));
			setTimeout(function() { $('.alert').alert('close'); }, 3000);								
		}
	}

	$.fn.Editor = function() {
		methods.init.apply(this, arguments);  
	}; 
})(jQuery);
