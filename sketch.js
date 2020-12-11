
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5;
var ground,tree,boy,stone;
var launcher; 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	mango1 = new Mango(940,430);
	mango2 = new Mango(900,340);
	mango3 = new Mango(1040,310);
	mango4 = new Mango(930,300);
	mango5 = new Mango(1010,420);
	ground = new Ground(600,660,1200,20);
	boy = new Boy();
	stone = new Stone(115,530,70,50);
	tree = new Tree();
	launcher = new Launcher(stone.body,{x:115,y:530})
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  boy.display();
  stone.display();
  launcher.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})
 }

 function mouseReleased(){
	launcher.fly();
 }

 function detectcollision(stone,mango){
mangoBodyPosition = mango.body.position
stoneBodyPosition = stone.body.position

var distance = dist(stone.body.position.x,stone.body.position.x, mango.body.position.x,mango.body.position.y)
 
if(distance<=mango.r,stone.r){
	Matter.Body.setStatic(mango.body,false)
}
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:115 , y:520})
    launcher.attach(stone.body);
  }
}

