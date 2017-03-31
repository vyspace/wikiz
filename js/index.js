(function($, undefined){
	"use strict"
	var menuSwitch = $("#menuSwitch"),
		subMenuOpen = $("#subMenuOpen"),
		navMenu = $("#navMenu");
	$("#myCarousiel").carousel();
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
})(jQuery);