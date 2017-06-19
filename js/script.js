var app = {}

app.init = function() {
	// app.addNavListener();
	app.addNavScrollListener();
	app.addSkillsSelectorListener();
}

// app.addNavListener = function() {
// 	$(".nav-bottom__item").on("click", function(e) {
// 		e.preventDefault();
// 		$(".nav-bottom__item").removeClass("item--selected");
// 		$(this).toggleClass("item--selected");
// 	});
// }

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
	if ($(window).width() > 540) 
	{
		$(window).scroll(function() {
			var scrollPosition = window.scrollY+center;
			
			console.log(scrollPosition, about, portfolio, contact);
			if (scrollPosition >= 0) {
				
				if (scrollPosition >= about.top && scrollPosition < portfolio.top) {
					$(".nav-bottom__item").removeClass("item--selected");
					$(".nav-about").addClass("item--selected");
					console.log("about");
				}
				else if (scrollPosition >= portfolio.top && scrollPosition < contact.top) {
					$(".nav-bottom__item").removeClass("item--selected");
					$(".nav-portfolio").addClass("item--selected");
					console.log("port");
				}
				else if (scrollPosition >= contact.top) {
					$(".nav-bottom__item").removeClass("item--selected");
					$(".nav-contact").addClass("item--selected");
					console.log("contact");
				}
				else {
					$(".nav-bottom__item").removeClass("item--selected");
				}
			}
		});
	}
}

$(function() {
	app.init();
});