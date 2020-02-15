const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine,world;
var box1,box2;

function setup() {
  var Canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,100,50,50);
  box2 = new Box(300,200,50,100);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
}