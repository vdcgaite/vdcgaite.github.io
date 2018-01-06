var halfWidth = window.innerWidth * 0.5;
var halfHeight = window.innerHeight * 0.5;
var img;

function preload() {
  img = loadImage('vdc-logo.png');
}

function setup() {
	createCanvas( window.innerWidth,window.innerHeight, WEBGL);
	background(51);
	 image(img, 0, 0);
}

function draw() {
	background(51);
 	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
  	box(200, 200, 200);
}