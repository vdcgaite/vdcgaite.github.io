var halfWidth = window.innerWidth * 0.5;
var halfHeight = window.innerHeight * 0.5;
var img;

function preload() {

}

function setup() {
	createCanvas( window.innerWidth,window.innerHeight, WEBGL);
	//background(51);
	img = loadImage("../assets/vdc-logo.png");
	
}

function draw() {
	image(img, 0, 0);
	/*background(51);
 	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
  	box(200, 200, 200);*/
}