var app = {}

app.init = function() {
	app.addNavScrollListener();
	app.addSkillsSelectorListener();
}

app.addSkillsSelectorListener = function() {
	$(".skills-selector .btn").on("click", function() {
		$(".skills-selector .btn").removeClass("btn--selected");
		$(this).addClass("btn--selected");
		switch($(this).html()) {
			case "Proficient":
				$(".skills-list > *").css("left", "-0%");
				break;
			case "Experienced":
				$(".skills-list > *").css("left", "-33.33%");
				break;
			case "Beginner":
				$(".skills-list > *").css("left", "-66.66%");
				break;
		}
	})
}

app.addNavScrollListener = function() {
	var about = document.getElementById("about").getBoundingClientRect();
	var portfolio = document.getElementById("portfolio").getBoundingClientRect();
	var contact = document.getElementById("contact").getBoundingClientRect();
	var center = $(window).height()/2
	var startPosition = window.scrollY;
	if ($(window).width() > 540) 
	{
		$(window).resize(function () {
			about = document.getElementById("about").getBoundingClientRect();
			portfolio = document.getElementById("portfolio").getBoundingClientRect();
			contact = document.getElementById("contact").getBoundingClientRect();
			center = $(window).height()/2
		});

		$(window).scroll(function() {
			var currPosition = window.scrollY;
			if (currPosition >= 0) {
				if (currPosition >= about.top+startPosition && currPosition < portfolio.top+startPosition) {
					$(".nav-top").addClass("nav--dk");
				}
				else if (currPosition >= portfolio.top+startPosition && currPosition < contact.top+startPosition) {
					$(".nav-top").addClass("nav--dk");
				}
				else if (currPosition >= contact.top+startPosition) {
					$(".nav-top").removeClass("nav--dk");
				}
				else {
					$(".nav-top").removeClass("nav--dk");
				}
			}
		});

		$(window).scroll(function() {
			var currPosition = window.scrollY+center;
			if (currPosition >= 0) {
				if (currPosition >= about.top+startPosition && currPosition < portfolio.top+startPosition) {
					$(".nav-bottom__item").removeClass("item--selected");
					$(".nav-about").addClass("item--selected");
					$(".nav-bottom").addClass("nav--dk");
				}
				else if (currPosition >= portfolio.top+startPosition && currPosition < contact.top+startPosition) {
					$(".nav-bottom__item").removeClass("item--selected");
					$(".nav-portfolio").addClass("item--selected");
					$(".nav-bottom").addClass("nav--dk");
				}
				else if (currPosition >= contact.top+startPosition) {
					$(".nav-bottom__item").removeClass("item--selected");
					$(".nav-contact").addClass("item--selected");
					$(".nav-bottom").removeClass("nav--dk");
				}
				else {
					$(".nav-bottom__item").removeClass("item--selected");
					$(".nav-bottom").removeClass("nav--dk");
				}
			}
		});
	}
}

$(function() {
	app.init();
});