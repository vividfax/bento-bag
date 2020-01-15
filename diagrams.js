function drawDiagrams() {

    scale(1);

    translate(80, 100);
    drawBag();

    translate(220, 120);
    drawFabric();
}

function drawBag() {

    const width = 140;

    fill(dark);
    noStroke();
    triangle(0, 0, 0, width, width, width);

    const gap = 2;
    fill(light);
    triangle(width - gap, 0, -gap, width, width - gap, width);

    fill(dark);
    triangle(width, 0, 0, width, width, width);

    const padding = 15;
    stroke(dark);
    strokeWeight(1.4);
    drawSpan(1, width + padding, width - 1, width + padding);
    drawSpan(width + padding, 1, width + padding, width - 1);
}

function drawFabric() {

    const width = 305;
    const height = 105;

    fill(dark);
    noStroke();
    rect(0, 0, width, height);

    const padding = 15;
    stroke(dark);
    strokeWeight(1.4);
    drawSpan(1, height + padding, width - 1, height + padding);
    drawSpan(width + padding, 1, width + padding, height - 1);
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
