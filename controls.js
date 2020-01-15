class Input {

    constructor(x, y, placeholder) {

        let input = createInput(placeholder);

        input.parent('sketch-holder');
        input.position(x, y);
        input.style('width', '40px');

        this.input = input;
        this.cached = placeholder;
    }

    cache() {
        this.cached = this.input.value()
    }

    changed() {

        if (this.input.value() != this.cached) {
            return true;
        }
    }
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

// function makeSlider(x, y) {

// 	let slider = createSlider(0, 255, 100);
// 	slider.parent('sketch-holder');
// 	slider.position(x, y);
// 	slider.style('width', '80px');

// 	return slider;
// }
