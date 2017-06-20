var app = {}

app.init = function() {
	app.addNavScrollListener();
	app.addSkillsSelectorListener();
	app.heroAnimation();
}

app.heroAnimation = function() {
	if ($(window).width() > 720) {
		app.renderLetter("DEAN WU", 0); 
	}
	else {
		$(".hero h1").html("DW");
	}
}

app.renderLetter = function(str, index) {
	var alphabetValue = str.charCodeAt(index)-64;
	var speed = 40+(500/alphabetValue*0.6);
	if (index >= str.length) {
		$(".hero h1 span").remove();
		return;
	}
	var i = 65;
	var intervalId = setInterval(function() {
		var temp = String.fromCharCode(i);
		$(".hero h1 span").html(temp);
		if (temp == str[index] || i >= 90 || str[index] == " ") {
			$(".hero h1").html(`${str.slice(0, index+1)}<span></span>`);
			clearInterval(intervalId);
			app.renderLetter(str, index+1);
		}
		i++;
	}, speed);
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
	var center = $(window).height()/2;
	var startPosition = window.scrollY;
	if ($(window).width() > 540) 
	{
		$(window).resize(function () {
			about = document.getElementById("about").getBoundingClientRect();
			portfolio = document.getElementById("portfolio").getBoundingClientRect();
			contact = document.getElementById("contact").getBoundingClientRect();
			center = $(window).height()/2;
			startPosition = window.scrollY;
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