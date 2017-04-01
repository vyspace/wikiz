(function($, undefined){
	"use strict"
	var menuSwitch = $("#menuSwitch"),
		subMenuOpen = $("#subMenuOpen"),
		navMenu = $("#navMenu"),
		goBackBtn = $("#goBackBtn");
	//$("#myCarousiel").carousel();
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
})(jQuery);