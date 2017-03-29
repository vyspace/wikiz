(function($, undefined){
	"use strict"
	var checkBoxes = $('div[role="checkbox"]');
	checkBoxes.on("click", function(e) {
		e.stopPropagation();
		var t = $(this),
			val = t.data("checked");
		if(val != "disabled") {
			if(val == "checked") {
				t.removeClass("icon-14").addClass("icon-16");
				t.data("checked", "");
			}
			else {
				t.removeClass("icon-16").addClass("icon-14");
				t.data("checked", "checked");
			}
		}
	});
})(jQuery);