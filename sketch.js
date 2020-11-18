const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var ground, ball;
function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,10,options);
  World.add(myworld,ground);
  console.log(ground);
  var Boption = {
    restitution:0.4
  }
  ball=Bodies.circle(200, 200, 20, Boption);
  World.add(myworld, ball);

}

function draw() {
  background(20); 
  Engine.update(myengine); 
  rectMode(CENTER);
  fill ("red");
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  fill ("green");
  ellipse(ball.position.x, ball.position.y, 20, 20);

}