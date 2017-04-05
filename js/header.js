(function($, undefined){
	"use strict";
	var headSubBtn = $("#headSubBtn"),
		headSubMenu = $("#headSubMenu"),
		menuSwitch = $("#menuSwitch"),
		subMenuOpen = $("#subMenuOpen"),
		navMenu = $("#navMenu"),
		goBackBtn = $("#goBackBtn"),
		navBtn = $("#navBtn"),
		navbarCollapse = $("#navbarCollapse");
	navBtn.on("click", function(e) {
		e.stopPropagation();
		navbarCollapse.toggle();
	});
	headSubBtn.on("click", function(e) {
		e.stopPropagation();
		var oft = headSubBtn.offset();
		if(!headSubMenu.isShow()) {
			headSubMenu.css({"top":(oft.top+40)+"px", "left":oft.left+"px"}).show(200);
		}
		else {
			headSubMenu.hide();
		}
	});
	menuSwitch.on("click", function(e) {
		var t = $(this),
			exp = t.attr("aria-expanded");
		if(exp == "true") {
			t.removeClass("nav-open");
		}
		else {
			t.addClass("nav-open");
		}
	});
	subMenuOpen.on("click", function(e) {
		e.stopPropagation();
		navMenu.addClass("move-in");
	});
	goBackBtn.on("click", function(e) {
		e.stopPropagation();
		navMenu.removeClass("move-in");
	});
	$("body").on("click", function(e) {
		if(headSubMenu.isShow()) {
			headSubMenu.hide();
		}
	});
	$(window).on("resize", function(e) {
		e.stopPropagation();
		headSubMenu.hide();
		return false;
	});

	$.fn.extend({
		isShow: function() {
			var t = $(this);
			var val = t.css("display");
			if(val=="none"){
				return false;
			}
			else {
				return true;
			}
		}
	});
})(jQuery);