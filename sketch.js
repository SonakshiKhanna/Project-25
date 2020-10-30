
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	
	world = engine.world;

	box1 = new Box(600, 640, 120, 120);
	
	ball = new Ball(100,150,20,20);
	ground = new Ground(400,700,800,10);

	Engine.run(engine);
	
}


function draw() {
  
  background(0);

  Engine.update(engine);
  ground.display();
  box1.display();
  ball.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-32});
	}
}

