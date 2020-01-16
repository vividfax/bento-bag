const light = "#f9dbbd";
const mid = "#ffa5ab";
const dark = "#a53860";

let scribble = new Scribble();
let measurements = {};

function setup() {

	let canvas = createCanvas(800, 500);
	canvas.parent('sketch-holder');
	pixelDensity(2);
	background(light);


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
