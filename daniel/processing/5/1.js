var img;
function preload(){
	img = loadImage("../assets/vdc-logo.png");
}
function setup(){
	createCanvas( window.innerWidth,window.innerHeight, WEBGL);
	background(51);
}
function draw(){
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	texture(img);
	box(200, 200, 200);
}