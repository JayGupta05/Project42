var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(displayWidth,displayHeight);
  
 
 
}

function draw() {
  background(0,0,0); 

  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);

  translate(200,200); 
  rotate(-90);
  noFill();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);
  
  stroke(0,0,0);
  stroke(255,0,0);
  strokeWeight(8);
  arc(0,0,300,300,0,scAngle);
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,60,0);
  pop();
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,40,0);
  pop();

  drawSprites();
}