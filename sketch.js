
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

  //groundObj = new ground(20,670,20,20);
  //leftSide = new ground (1100,600,20,120);
  //rightSide = new ground (1100,600,20,120);
  leftSide=new ground (10,20,30,40);

var ball_options={  
isStatic:true,
restitution:0.3,
friction:0,
density: 1.2
}

	engine = Engine.create();
	world = engine.world;
Matter.Bodies.circle(80,75,20)
	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
   

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
 groun
}
function keyPressed (){
	if(keyPressed===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

	}




