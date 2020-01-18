class Input {

    constructor(x, y, placeholder) {

        let input = createInput(placeholder);

        input.parent('sketch-holder');
        input.class('form-control');
        input.position(x, y);

        input.style('width', '90px');
        input.style('text-align', 'center');
        input.style('color', light);
        input.style('background', white);
        input.style('border', 'none');
        input.style('font-size', '20px');
        input.style('padding-bottom', '1px');

        this.input = input;
        this.cached = placeholder;
    }

    get() {
        return this.input.value();
    }

    set(n) {
        this.input.value(n);
    }

    round() {

        let n = this.input.value();
        n *= 4;
        n = round(n);
        n /= 4;

        this.input.value(n);
    }

    empty() {
        this.input.value('');
    }

    checkNull() {

        if (this.input.value() == 'NaN' || this.input.value() == 0) {
            this.input.value('');
        }
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

    let seamAllowance = 1.5;
    seamAllowance *= 2;

    let m = measurements;
    let n, third;

    switch (true) {

        case m.bagHeight.changed():

            n = m.bagHeight.get();
            third = dehypotenuse(n);

            m.bagWidth.set(n);
            m.fabricLength.set(third + seamAllowance);
            m.fabricWidth.set(third * 3 + seamAllowance);

            m.bagWidth.round();
            m.fabricLength.round();
            m.fabricWidth.round();

            break;

        case m.bagWidth.changed():

            n = m.bagWidth.get();
            third = dehypotenuse(n);

            m.bagHeight.set(n);
            m.fabricLength.set(third + seamAllowance);
            m.fabricWidth.set(third * 3 + seamAllowance);

            m.bagHeight.round();
            m.fabricLength.round();
            m.fabricWidth.round();

            break;

        case m.fabricLength.changed():

            n = m.fabricLength.get();
            third = n - seamAllowance;

            if (n <= seamAllowance) {

                m.bagHeight.empty();
                m.bagWidth.empty();
                m.fabricWidth.empty();

                break;
            }
            m.bagHeight.set(hypotenuse(third));
            m.bagWidth.set(hypotenuse(third));
            m.fabricWidth.set(third * 3 + seamAllowance);

            m.bagHeight.round();
            m.bagWidth.round();
            m.fabricWidth.round();

            break;

        case m.fabricWidth.changed():

            n = m.fabricWidth.get();
            third = (n - seamAllowance) / 3;

            if (n <= seamAllowance) {

                m.bagHeight.empty();
                m.bagWidth.empty();
                m.fabricLength.empty();

                break;
            }
            m.bagHeight.set(hypotenuse(third));
            m.bagWidth.set(hypotenuse(third));
            m.fabricLength.set(third + seamAllowance);

            m.bagHeight.round();
            m.bagWidth.round();
            m.fabricLength.round();

            break;

        default:
            return;
    }
    all('checkNull');
    all('cache');
}

function all(funct) {

    for (let m of Object.keys(measurements)) {
        eval('measurements[m].' + funct + '()');
    }
}

function hypotenuse(a) {
    return sqrt(a * a * 2);
}

function dehypotenuse(a) {
    return sqrt((a * a) / 2);
}
