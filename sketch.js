const light = "#f9dbbd";
const mid = "ffa5ab";
const dark = "a53860";

let measurements = {};

function setup() {

	let canvas = createCanvas(800, 500);
	canvas.parent('sketch-holder');
	background(light);

	const x = 20;
	const y = 80;

	measurements = {
		bagHeight: new Input(x, y, 11),
		bagWidth: new Input(x, y + 100, 11),
		fabricLength: new Input(x, y + 200, 8),
		fabricWidth: new Input(x, y + 300, 22)
	};

	cacheAll();
}

function draw() {

	calculateMeasurements();
	cacheAll();
}

function calculateMeasurements() {

	switch (true) {

		case measurements.bagHeight.changed():

			let num = measurements.bagHeight;
			measurements.bagWidth = num;

			break;

		case measurements.bagWidth.changed():

			break;

		case measurements.fabricLength.changed():

			break;

		case measurements.fabricWidth.changed():

			break;
	}
}

function cacheAll() {

	for (let m of Object.keys(measurements)) {
		measurements[m].cache();
	}
}
