const light = "#f9dbbd";
const mid = "#ffa5ab";
const dark = "#a53860";

let measurements = {};

function setup() {

	let canvas = createCanvas(800, 500);
	canvas.parent('sketch-holder');
	pixelDensity(2);
	background(light);


	const x = 20;
	const y = 80;

	measurements = {
		bagHeight: new Input(x, y, 11),
		bagWidth: new Input(x, y + 100, 11),
		fabricLength: new Input(x, y + 200, 8),
		fabricWidth: new Input(x, y + 300, 22)
	};
	drawDiagrams();
}

function draw() {

	calculateMeasurements();
	cacheAll();
}

function drawDiagrams() {

	scale(1.2);

	translate(80, 100);
	drawBag();

	translate(210, 85);
	drawFabric();
}

function drawBag() {

	fill(dark);
	stroke(light);
	triangle(0, 0, 0, 100, 100, 100);
	triangle(100, 0, 0, 100, 100, 100);

	stroke(dark);
	const padding = 12;
	drawSpan(1, 100 + padding, 98, 100 + padding);
	drawSpan(100 + padding, 1, 100 + padding, 98);
}

function drawFabric() {

	fill(dark);
	stroke(light);
	rect(0, 0, 240, 80);

	stroke(dark);
	const padding = 12;
	drawSpan(1, 80 + padding, 238, 80 + padding);
	drawSpan(240 + padding, 1, 240 + padding, 78);
}

function drawSpan(x1, y1, x2, y2) {

	line(x1, y1, x2, y2);

	const footWidth = 2.5;

	if (x1 == x2) {

		line(x1 - footWidth, y1, x1 + footWidth, y1);
		line(x2 - footWidth, y2, x2 + footWidth, y2);

	} else if (y1 == y2) {

		line(x1, y1 - footWidth, x1, y1 + footWidth);
		line(x2, y2 - footWidth, x2, y2 + footWidth);
	}
}
