
var bullet,bulletRightEdge
var wall,wallLeftEdge
var speed  
var thickness  
var weight
var rand
function setup() {
  createCanvas(1600,400);
  speed  = Math.round(random(55,90));
  rand   = Math.round(random(1,10))
  weight = Math.round(random(23,50));
  thickness = Math.round(random(223,321)) ;
  bullet = createSprite(100, 200, 80, weight);
  bullet.velocityX = speed;
  wall = createSprite(1570,200,thickness,400);
}

function draw() {
  background("black");  
  
  console.log(thickness);
  console.log(weight);
  console.log(speed);


if(hasCollided(bullet,wall)){
  bullet.velocityX = 0
  var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness) + rand
  console.log(damage);
  if(damage > 10){
 bullet.shapeColor = color(255,0,0)
 console.log("bullet is red" );
}

if(damage <= 10){
  bullet.shapeColor = color(0, 255, 0)
  console.log("bullet is green");
}
}


drawSprites();
}
function hasCollided(a,b){




if(b.x - a.x < (a.width + b.width)/2){

  return true
}
 

    return false
  
}

