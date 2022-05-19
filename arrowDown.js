function arrowDown() {

	var downy = document.querySelectorAll('.downArrow');
	let ctx = [];	
	
	function make(index, pad, segment, thickness, color) {

		downy[index].width = thickness + pad + segment * 2;
		downy[index].height = thickness + pad + segment;

		ctx.push(downy[index].getContext('2d'));
		ctx[index].lineWidth = thickness;
		ctx[index].strokeStyle = color;
		ctx[index].beginPath();
		ctx[index].moveTo(pad, pad);
		ctx[index].lineTo(segment + pad, segment + pad);
		ctx[index].lineTo(segment * 2 + pad, pad);
		ctx[index].stroke();
	}

	// EXECUTION //
	let segment = 1.1;
	let thickness = 0.2;
	let segMob = 3.7;
	let thiMob = 0.7;
	let color = '#7d24ff'

	if (window.innerWidth <= 500) {
		segment = segMob;
		thickness = thiMob;
	}
	
	for (let i = 0;i < 3;i++) {
		make(i, vw(0.3125), vw(segment), vw(thickness), color)
	}

	window.addEventListener('resize', () => {
		ctx = [];;
		
		if (window.innerWidth <= 500) {
			segment = segMob;
			thickness = thiMob;
		} else {
			segment = 1.125;
			thickness = 0.2;
		}

		for (let i = 0;i < 3;i++) {
			make(i, vw(0.3125), vw(segment), vw(thickness), color)
		}
	});

}
