let img;

function preload() {
  img = loadImage("heightmapper_397_3220.png");
}

function setup() {
  let ratio = img.width / img.height;
  createCanvas(1100, 1100 / ratio);
}

function draw() {
  background(250);
}
