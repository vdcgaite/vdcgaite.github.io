var halfWidth = window.innerWidth * 0.5;
var halfHeight = window.innerHeight * 0.5;

function setup() { 
	createCanvas( window.innerWidth,window.innerHeight);
	console.log("halfHeight:"+halfHeight);
	console.log("halfWidth:"+halfWidth);
} 

function draw() { 
	console.log("width:"+width);
	console.log("height:"+height);
	 // Set the background to black and turn off the fill color
	background(0);
	stroke(255);
	fill(255);
	//point(halfWidth, 10);
	ellipse(halfWidth, halfHeight, 80, 80);
	line(halfWidth, 0, halfWidth, height);
	line(0, halfHeight, width, halfHeight);
	 
	if (mouseIsPressed) {
		fill(255);
	} else {
		stroke(255, 0, 0);
	 	// set a fill color (red, green, blue)
		fill(255,0,0);
	}
	ellipse(mouseX, mouseY, 80, 80);

  	//triangle(halfWidth-50, halfHeight+50, halfWidth, halfHeight-50, halfWidth+50, halfHeight+50);
}