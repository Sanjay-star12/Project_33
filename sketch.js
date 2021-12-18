const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snowbackG,snoww;
var engine,world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
   snoww = new Snow(200,100,50,20);
   snowbackG = loadImage("snow2.jpg");
}

function draw() {
  background(snowbackG);
  
  snoww.display()
  Engine.update(engine);  
  drawSprites();
}