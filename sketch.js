const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygonImg;
var score=0;
var bg= "lightblue.png";

function preload() {
  
  getBackgroundImage();

    backgroundImg = loadImage(bg);
  console.log(backgroundImg);

  hexagonImg= loadImage("hexagon.png");
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  log1 = new Log(390,300,250,10);
  log2 = new Log(700,200,200,10);

  rect1 = new Block(300,275,30,40);
  rect2 = new Block(330,275,30,40);
  rect3 = new Block(360,275,30,40);
  rect4 = new Block(390,275,30,40);
  rect5 = new Block(420,275,30,40);
  rect6 = new Block(450,275,30,40);
  rect7 = new Block(480,275,30,40);
  rect8 = new Block(330,235,30,40);

  rect9 = new Block(360,235,30,40);
  rect10 = new Block(390,235,30,40);
  rect11 = new Block(420,235,30,40);
  rect12 = new Block(450,235,30,40);

  rect13 = new Block(360,195,30,40);
  rect14 = new Block(390,195,30,40);
  rect15 = new Block(420,195,30,40);
 
  rect16 = new Block(390,155,30,40);

  rect17 = new Block(640,175,30,40);
  rect18 = new Block(670,175,30,40);
  rect19 = new Block(700,175,30,40);
  rect20 = new Block(730,175,30,40);
  rect21 = new Block(760,175,30,40);

  rect22 = new Block(670,135,30,40);
  rect23 = new Block(700,135,30,40);
  rect24 = new Block(730,135,30,40);

  rect25 = new Block(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  
  World.add(world,ball); 
  
  slingshot = new Slingshot(this.ball,{x:100,y:200});

  Engine.run(engine);

}

function draw() {
  if(backgroundImg)
    background(backgroundImg);
  

  ground.display(); 

  log1.display();
  log2.display();

  fill("skyblue");

  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();

  rect6.display();
  rect7.display();

   fill("pink");

  rect8.display();
 rect9.display();
  rect10.display();
  rect11.display();
  rect12.display();

  fill("red");

  rect13.display();
  rect14.display();
  rect15.display();

  fill("yellow");

  rect16.display();

  fill("skyblue");

  rect17.display();
  rect18.display();
  rect19.display();
  rect20.display();
  rect21.display();

  fill("green");

  rect22.display();
  rect23.display();
  rect24.display();
  
  fill("orange");

  rect25.display();

  slingshot.display();

  fill("gold");
   imageMode(CENTER) 
   image(hexagonImg ,ball.position.x,ball.position.y,40,40);

 

  textSize(20);
  fill("yellow");
  text("Drag the hexagonal stone and release it, to launch it towards the block",100,30);

text("SCORE : "+ score,750,40);

rect1.score();
rect2.score();
rect3.score();
rect4.score();
rect5.score();
rect6.score();
rect7.score();
rect8.score();
rect9.score();
rect10.score();
rect11.score();
rect12.score();
rect13.score();
rect14.score();
rect15.score();
rect16.score();
rect17.score();
rect18.score();
rect19.score();
rect20.score();
rect21.score();
rect22.score();
rect23.score();
rect24.score();
rect25.score();

  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function  mousereleased(){
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32){
    slingShot.attach(this.hexagon);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "lightblue.png";
  } else {
    bg = "lightred.png";
  }

 // backgroundImg = loadImage(bg);
  //console.log(backgroundImg);
}