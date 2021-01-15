

const chars = "1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERATSDFZXCVHBGTYUIOHJKLOPMNB[]"

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

$(document).ready(function(){
	
	// For clicking logo anim
	
	$("#logoButton").click(function(){
		console.log("CLICKED");
		$("#logo-container").animate({deg: 360}, {duration: 2000, step: function(now){
			$("#logo-container").css({transform: 'rotate('+now+'deg)'});
		}})
	});


	// Removes our logo after a user clicks on it for the first time

	$("#logo").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e){
		$("#logo").hide();

		$("#title").show();
		$("#title").animate({marginLeft: "0px"}, "15s");

	});
	const observer = new IntersectionObserver(async function(){
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
	}, {threshold: 0.0})

	observer.observe(document.querySelector('#title'));
});