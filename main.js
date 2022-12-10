let theta = 0;

function draw() {
    translate(300, 300);

    const r = 240 * cos(theta * 8);
    const x = r * sin(theta);
    const y = r * cos(theta);

    point(x, y);
    point(y, -x);
    point(-x, -y);
    point(-y, x);

    theta += 0.002;
}

function setup() {
    createCanvas(600, 600);
    background(70, 12, 104);
    strokeWeight(10);
    stroke(245, 110, 179);
}
