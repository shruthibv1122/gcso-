var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 100, 25, 15);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="80,80,80";
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background("black");  
  bullet.velocityX=speed;
  detector();
  thickness = random(22,83);
  drawSprites();
}
function detector(){
  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0; 
    var deformation=0.5 * weight * speed* speed/22500; 
    if(deformation>180) { 
      bullet.shapeColor=color(255,0,0); 
    } 
    if(deformation<180 && deformation>100) { 
      bullet.shapeColor=color(230,230,0); 
    } 
    if(deformation<100) { 
      bullet.shapeColor=color(0,255,0); 
    } 
  }
}