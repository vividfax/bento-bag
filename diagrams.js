function drawDiagrams() {

    noStroke();
    strokeWeight(1.4);

    translate(80, 100);
    drawBag();

    translate(220, 120);
    drawFabric();
}

function drawBag() {

    const width = 140;

    fill(mid);
    triangle(0, 0, 0, width, width, width);
    scribbleTriangle(0, 0, 0, width, width, width);

    fill(mid);
    triangle(width, 0, 0, width, width, width);
    scribbleTriangle(width, 0, 0, width, width, width);

    drawSpan(1, width, width - 1, width);
    drawSpan(width, 1, width, width - 1);
}

function drawFabric() {

    const seamAllowance = 10;
    const width = 300 + seamAllowance;
    const height = 100 + seamAllowance;

    fill(mid);
    rect(0, 0, width, height);
    scribbleRect(0, 0, width, height);

    drawFolds(width, height, seamAllowance);

    drawSpan(0, height, width, height);
    drawSpan(width, 0, width, height);
}

function drawFolds(width, height, pad) {

    const third = (width - pad * 2) / 3;

    stroke(light);
    drawingContext.setLineDash([3, 5]);

    rect(pad, pad, width - pad * 2, height - pad * 2);
    line(pad, pad, third + pad, height - pad);
    line(third + pad, height - pad, third * 2 + pad, pad);
    line(third * 2 + pad, pad, third * 3 + pad, height - pad);

    drawingContext.setLineDash([]);
}

function scribbleRect(x, y, width, height) {

    x += (width / 2);
    y += (height / 2);

    stroke(dark);
    scribble.scribbleRect(x, y, width, height);
}

function scribbleTriangle(x1, y1, x2, y2, x3, y3) {

    stroke(dark);

    scribble.scribbleLine(x1, y1, x2, y2);
    scribble.scribbleLine(x2, y2, x3, y3);
    scribble.scribbleLine(x3, y3, x1, y1);
}

function drawSpan(x1, y1, x2, y2) {

    const padding = 18;
    const footWidth = 6;

    stroke(mid);

    if (x1 == x2) {

        x1 += padding;
        x2 += padding;

        scribble.scribbleLine(x1 - footWidth, y1, x1 + footWidth, y1);
        scribble.scribbleLine(x2 - footWidth, y2, x2 + footWidth, y2);

    } else if (y1 == y2) {

        y1 += padding;
        y2 += padding;

        scribble.scribbleLine(x1, y1 - footWidth, x1, y1 + footWidth);
        scribble.scribbleLine(x2, y2 - footWidth, x2, y2 + footWidth);
    }
    scribble.scribbleLine(x1, y1, x2, y2);
}
