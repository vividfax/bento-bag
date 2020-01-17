const light = "#696773";
const mid = "#009fb7";
const dark = "#fed766";
const white = "#eff1f3";

let scribble = new Scribble();
let measurements = {};

function setup() {

	let canvas = createCanvas(800, 500);
	canvas.parent('sketch-holder');
	pixelDensity(2);

	drawBackground();

	scribble.bowing = 0.1;
	scribble.roughness = 1.3;

	measurements = {

		bagHeight: new Input(255, 150, 17),
		bagWidth: new Input(105, 275, 17),

		fabricLength: new Input(655, 265, 14),
		fabricWidth: new Input(420, 375, 28)
	};
	drawDiagrams();
}

function draw() {

	calculateMeasurements();
}

function drawBackground() {

	noStroke();
	fill(light);
	rect(10, 10, width - 20, height - 20);

	stroke(light);
	strokeWeight(8);
	scribble.bowing = 0.3;
	scribble.scribbleRect(width / 2, height / 2, width - 20, height - 20);
}
