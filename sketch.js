const light = "#696773";
const mid = "#009fb7";
const dark = "#fed766";
const white = "#eff1f3";

let scribble = new Scribble();
let measurements = {};

let wiggle = false;

function setup() {

	let canvas = createCanvas(800, 500);
	canvas.parent('sketch-holder');
	pixelDensity(2);

	drawBackground();

	scribble.bowing = 0.1;
	scribble.roughness = 1.3;

	measurements = {

		bagHeight: new Input(255, 145, 22),
		bagWidth: new Input(105, 270, 22),

		fabricLength: new Input(655, 260, 18.5),
		fabricWidth: new Input(420, 370, 49.5)
	};
	drawDiagrams();
}

function draw() {

	calculateMeasurements();

	if (wiggle && frameCount % 8 == 0) {

		drawBackground();
		drawDiagrams();
	}
}

function drawBackground() {

	background(white);
	noStroke();
	fill(light);
	rect(10, 10, width - 20, height - 20);

	stroke(light);
	strokeWeight(8);
	scribble.bowing = 0.2;
	scribble.scribbleRect(width / 2, height / 2, width - 20, height - 20);
}

function keyPressed() {

	if (key == 'w') {
		wiggle = !wiggle;
	}
}
