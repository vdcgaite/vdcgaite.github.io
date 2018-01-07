var img;
function preload(){
  img = loadImage("../assets/vdc-logo.png");
}
function setup(){
  createCanvas(500,500,WEBGL);
}
function draw(){
  background(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(200, 200, 200);
}