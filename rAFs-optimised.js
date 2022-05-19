function rAFs() {

																			// COMET
	let comet = document.getElementById('comet');
	let cometContainer = document.getElementById('comet-container');
	let cometComp = window.getComputedStyle(comet);
	let cometContainerComp = window.getComputedStyle(cometContainer);
	/* 
	waitRate equals to 17, which is 60 fps in miliseconds,
	since i assume animate() is called 60 times a second
	*/
	let waitCount = 17;
	let waitTime = 0;	
	var waitDone;
	var speed;
	function reset() {
		waitDone = Math.random() * (3000 - 600) + 600;
		waitTime += waitCount;
		if (waitTime >= waitDone) {
			comet.style.left = cometContainerComp.width;
			comet.style.bottom = Math.random() * parseFloat(cometContainerComp.height) + "px";
		}
	}

	comet.style.left = cometContainerComp.width;
	comet.style.bottom = vh(60) + "px";
	//console.log(cometComp.left > vw(5))
	
	if (window.innerWidth <= 500) {
		speed = 6.1;
	} else {
		speed = 3.5;
	}

	window.addEventListener('resize', () => {
		if (window.innerWidth <= 500) {
			speed = 6.1;
		} else {
			speed = 3.5;
		}
	});

																			// COMET END
	let starRot = 0;														// STARS ROTATE
	let stars = document.getElementById('animation-container');				// STARS ROTATE

	function animate() {

																			// COMET
		if (parseFloat(cometComp.left) > vw(-5)) {
			comet.style.left = (parseFloat(cometComp.left) - vw(speed)) + "px";
			waitTime = 0;
		} else {reset()}
																			// COMET END
																			// STARS ROTATE
		if (starRot >= 360) {starRot = 0}
		starRot += 0.03;
		stars.style.transform = `rotate(${starRot}deg)`
																			// STAR ROTATE END
		requestAnimationFrame(animate);

	}

	animate()
}
