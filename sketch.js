const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(390,150,360,40)

	bob1 = new Bob(250,500,35);
	bob2 = new Bob(320,500,35);
	bob3 = new Bob(390,500,35);
	bob4 = new Bob(460,500,35);
	bob5 = new Bob(530,500,35);

	chain1 = new Rope(bob1.body, roof.body, -35*4,0);
	chain2 = new Rope(bob2.body, roof.body, -35*2,0);
	chain3 = new Rope(bob3.body, roof.body, -35*0,0);
	chain4 = new Rope(bob4.body, roof.body, -35*-2,0);
	chain5 = new Rope(bob5.body, roof.body, -35*-4,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
Engine.update(engine);

  drawSprites();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:1000})
	}
	if(keyCode === 50) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:1000});
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-1000,y:1000});
	}
}
