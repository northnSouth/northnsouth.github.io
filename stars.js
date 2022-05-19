function stars() {
                                                                              // Star Generation //
    let canvasA = document.getElementById('starsA');
    let cA = canvasA.getContext('2d');

	canvasA.width = window.innerWidth; 
    canvasA.height = window.innerHeight;

	let opacity = 0.8;
       
    function Constell(canvas, x, y, width, height) {
		this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.width = width;
		this.height = height;
        this.clearX = this.x - (this.rad/2) - vw(2);
        this.clearY = this.y - (this.rad/2) - vw(2);

        this.make = function () {
            this.canvas.beginPath();
            this.canvas.fillStyle = `rgba(167, 167, 167, ${opacity})`;
            this.canvas.rect(this.x, this.y, this.width, this.height);
            this.canvas.fill();
        }
        this.debug = function () {
        }
    }

    let cluster = [];
    let clLen = 25; // generation amount
    
    function pushObj (canvas, cluster) {
        for (let i = 0; i < clLen; i++) {
            let width = Math.random() * (vw(0.2) - vw(0.125)) + vw(0.125);
			if (window.innerWidth <= 500) {
				width = Math.random() * (vw(0.4) - vw(0.2)) + vw(0.2);
			}
			let height = width;
            let x = Math.random() * innerWidth;
            let y = Math.random() * innerHeight;
            cluster.push(new Constell(canvas, x, y, width, height));
        }
    }

    pushObj(cA, cluster);
                                                                              // END Star Generation //
    function generate() {
        for (let i = 0; cluster.length > i; i++) {
            cluster[i].make();
        }
        // deb.debug
    }
    
    generate();

	window.addEventListener('resize', () => {
		canvasA.width = window.innerWidth; 
    	canvasA.height = window.innerHeight;

		cluster = [];
		pushObj(cA, cluster);
		generate();
	});
}
