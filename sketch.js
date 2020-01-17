const light = "#f9dbbd";
const mid = "#ffa5ab";
const dark = "#a53860";

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

		bagHeight: new Input(250, 160, 11),
		bagWidth: new Input(125, 270, 11),

		fabricLength: new Input(640, 265, 8),
		fabricWidth: new Input(430, 360, 22)
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
