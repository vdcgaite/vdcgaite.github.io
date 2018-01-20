//var data = [{"x":20,"y":20,"w":50, "h":50},{"x":100,"y":100,"w":50,"h":50}];
var url = "https://vdcgaite.github.io/daniel/processing/data/data.json";
var data ;

function preload() {
	data = loadJSON(url);
}
function setup(){
	createCanvas( window.innerWidth,window.innerHeight);
	console.log(data);
}
function draw(){

	for (var element of data){
	    // Your element is in format : 
	    // {"x":"20","y":"24","name":"NewNov"}

	    // To get X
	    var x = element.x; // or element["x"]
	    // To get Y
	    var y = element.y; // or element["y"]
	    // To get name
	    var w = element.w; // or element["name"]
	    var h = element.h;

	    // Do whatsoever with your element
	    // ...
	    rect(x, y, w, h);
	}
}