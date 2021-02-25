
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var commando, terrorist, bomb;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	commando = new Commando(windowWidth/6, windowHeight-250, 20,20);
	terrorist = new Terrorist(windowWidth/1.3, windowHeight-250, 20,20);
	bomb = new Bomb(windowWidth/6, windowHeight - 20, "white");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  Engine.update(engine);
  commando.display();
  terrorist.display(); 
  bomb.display();


  keypressed();
}

function keypressed(){
	if (keyDown === UP_ARROW){
		Matter.Body.applyForce({x:85, y:-85});
	}
}



