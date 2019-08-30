var stars = [];

var speed;

function setup() {
    createCanvas(1680, 907);
    for (var i = 0; i < 800; i++) { //Num Of Stars
        stars[i] = new Star();
    }
}

function draw() {
    speed = map(mouseX, 0, width, 0, 50); //Num Of Star Speed
    background(0);
    translate(width / 2, height / 2);
    for (var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}