var img;
function preload(){
  img = loadImage("../assets/vdc-logo.png");
}
function setup(){
  createCanvas( window.innerWidth,window.innerHeight);
  background(51);
}
function draw(){
  background(51);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(200, 200, 200);
}