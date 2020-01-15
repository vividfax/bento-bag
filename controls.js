class Input {

    constructor(x, y, placeholder) {

        let input = createInput(placeholder);

        input.parent('sketch-holder');
        input.position(x, y);
        input.style('width', '40px');

        this.input = input;
        this.cached = placeholder;
    }

    get() {
        return this.input.value();
    }

    set(num) {
        this.input.value(num);
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

    let m = measurements;
    let num;

    switch (true) {

        case m.bagHeight.changed():

            num = m.bagHeight.get();
            m.bagWidth.set(num);

            break;

        case m.bagWidth.changed():

            num = m.bagWidth.get();
            m.bagHeight.set(num);

            break;

        case m.fabricLength.changed():

            num = m.fabricLength.get();
            m.fabricWidth.set((num - 2) * 3 + 2);

            break;

        case m.fabricWidth.changed():

            num = m.fabricWidth.get();
            m.fabricLength.set((num - 2) / 3 + 2);

            break;

        default:
            return;
    }
    cacheAll();
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
