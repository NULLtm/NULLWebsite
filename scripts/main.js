

var chars = "1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERATSDFZXCVHBGTYUIOHJKLOPMNB[]"

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

async function fancyText(){
	await sleep(200);
	for(var i = 0; i < 10; i++){
		const one = chars[Math.floor(Math.random() * chars.length)];
		const two = chars[Math.floor(Math.random() * chars.length)];
		const three = chars[Math.floor(Math.random() * chars.length)];
		const four = chars[Math.floor(Math.random() * chars.length)];
		$("#title").text(one+two+three+four);
		await sleep(50)
	}

	$("#title").text("N%g*");

	for(var i = 0; i < 10; i++){
		const two = chars[Math.floor(Math.random() * chars.length)];
		const three = chars[Math.floor(Math.random() * chars.length)];
		const four = chars[Math.floor(Math.random() * chars.length)];
		$("#title").text("N"+two+three+four);
		await sleep(50)
	}

	$("#title").text("NUg*");

	for(var i = 0; i < 10; i++){
		const three = chars[Math.floor(Math.random() * chars.length)];
		const four = chars[Math.floor(Math.random() * chars.length)];
		$("#title").text("NU"+three+four);
		await sleep(50)
	}

	$("#title").text("NUL*");

	for(var i = 0; i < 10; i++){
		const four = chars[Math.floor(Math.random() * chars.length)];
		$("#title").text("NUL"+four);
		await sleep(50)
	}

	$("#title").text("NULL");
}

$(document).ready(function(){
	
	// For clicking logo anim


	// Removes our logo after a user clicks on it for the first time

	$("#logo-container").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e){

		$("#logoTop").animate({top: "-700px", left: "700px"}, 3000, "swing");
		$("#bgTop").animate({top: "-700px", left: "700px"}, 3000, "swing");
		$("#bgBot").animate({top: "700px", left: "-700px"}, 3000, "swing");
		fancyText();
		$("#logoBottom").animate({top: "700px", left: "-700px"}, 3000, "swing", async function(){
			$("#logo-container").hide();
			$("#logoTop").hide();
			$("#logoBottom").hide();
			$("#bgBot").hide();
			$("#bgTop").hide();
			$("form").show();
			$(".section-header").show();
			$("#chat-container").show();
		});

	});
});