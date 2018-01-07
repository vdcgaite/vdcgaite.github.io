var img;
function preload(){
	img = loadImage("../assets/logoVdc.jpg");
}
function setup(){
	createCanvas( window.innerWidth,window.innerHeight, WEBGL);
}
function draw(){
	background(250);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	texture(img);
	box(200, 200, 200);
}