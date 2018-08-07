// REFACTOR THIS TRASH CODE SOMETIME LOL

var app = {}

app.init = function() {
	app.addNavScrollListener();
	app.heroAnimation();
	setInterval(function() {
		app.heroAnimation();
	}, 20000);
}

app.heroAnimation = function() {
	if ($(window).width() > 720) {
		app.renderHero("DEAN WU", 0); 
		app.windowResizeHeroListener();
	}
	else {
		app.heroResize();
		$(".hero h2").css("transform", "none");
		$(".hero h2").css("opacity", "1.0")
		app.windowResizeHeroListener();
	}
}

app.heroResize = function() {
	if ($(window).width() < 320) {
		$("h1").html("DW");
		$("h1").css("font-size", "100px");
	}
	else {
		$("h1").html("DEAN WU");
	}
}

app.windowResizeHeroListener = function() {
	$(window).resize(function () {
		app.heroResize();
	});
}

app.renderHero = function(str, index) {
	var alphabetIndex = str.charCodeAt(index) - 64;
	var speed = 40 + (500 / alphabetIndex * 0.6);
	if (index >= str.length) {
		$("h1 span").remove();
		$(".hero h2").css("transform", "none");
		$(".hero h2").css("opacity", "1.0")
		return;
	}
	var i = 65;
	var intervalId = setInterval(function() {
		var temp = String.fromCharCode(i);
		$("h1 span").html(temp);
		if (temp === str[index] || i >= 90 || str[index] === " ") {
			$("h1").html(`${str.slice(0, index + 1)}<span></span>`);
			clearInterval(intervalId);
			app.renderHero(str, index + 1);
		}
		i++;
	}, speed);
}

app.addNavScrollListener = function() {
	var about = document.getElementById("about").getBoundingClientRect();
	var portfolio = document.getElementById("portfolio").getBoundingClientRect();
	var contact = document.getElementById("contact").getBoundingClientRect();
	var center = $(window).height() / 2;
	var startPosition = window.scrollY;
	if ($(window).width() > 540) 
	{
		$(window).resize(function () {
			about = document.getElementById("about").getBoundingClientRect();
			portfolio = document.getElementById("portfolio").getBoundingClientRect();
			contact = document.getElementById("contact").getBoundingClientRect();
			center = $(window).height() / 2;
			startPosition = window.scrollY;
		});

		$(window).scroll(function() {
			var currPosition = window.scrollY;
			if (currPosition >= 0) {
				if (currPosition >= about.top + startPosition && currPosition < portfolio.top + startPosition) {
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
			var currPosition = window.scrollY + center;
			if (currPosition >= 0) {
				if (currPosition >= about.top + startPosition && currPosition < portfolio.top + startPosition) {
					$(".nav-bottom__item").removeClass("item--selected");
					$(".nav-about").addClass("item--selected");
					$(".nav-bottom").addClass("nav--dk");
				}
				else if (currPosition >= portfolio.top+startPosition && currPosition < contact.top + startPosition) {
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