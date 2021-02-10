const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32, box33, box34, box35, box36, box37, box38, box39, box40, box41, box42, box43, box44, box45, box46, box47, box48, box49, box50, box51, box52, box53, box54, box55, box56, box57, box58, box59;
var ball;
var slingshot;

function preload()
{

}

function setup() {
  createCanvas(900,700);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2-100, height/2+150, 900, 20);

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  slingshot = new Sling(this.ball, {x: 100, y: 200,width:20,height:100});

box1=new Box (400,500,30,30)
box2=new Box  (400,470,30,30)
box3=new Box  (400,440,30,30)
box4=new Box  (400,410,30,30)
box5=new Box  (400,380,30,30)
box6=new Box  (400,350,30,30)
box7=new Box  (400,320,30,30)
box8=new Box  (400,290,30,30)
box9=new Box  (400,260,30,30)
box10=new Box  (400,230,30,30)
box11=new Box  (400,200,30,30)
box12=new Box  (400,170,30,30)



}

function draw() {
  background(57,43,44);  
  Engine.update(engine);
  drawSprites();
 ground1.display();
 
 box1.display();
 box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

  

  

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40)

  slingshot.display();
}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}