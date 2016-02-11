var scrollBo;
var boX;
var boY;


function setup(){
  var bo = createCanvas(windowWidth, windowHeight, WEBGL)
  bo.parent("background")
  console.log("width: " + $(window).width() + "and height: " + height)
}

function draw(){
  background("#f6f6f6");
  rotateX(frameCount * 0.1);
  rotateZ(frameCount * 0.1);  specularMaterial(0,0,0)
  cylinder(10, 400);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function mouseWheel(e){
  console.log(e.delta)
}
