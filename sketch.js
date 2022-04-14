
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var bloco = {

	friction:0.02
}
blocos=Bodies.circle(200, 50, 100, bloco)
World.add(world, blocos)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  drawSprites();
 ellipse(blocos.position.x, blocos.position.y, 100)
}



