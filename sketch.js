const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, dayImg;

var snowa=[];
var snowb = [];

var snowaImg, snowbImg;





function preload() {
  backgroundImg = loadImage("snow1.jpg")
  getTime();

  dayImg = loadImage("snow1.jpg")

  snowaImg = loadImage("snow4.webp")
  snowbImg = loadImage("snow5.webp")
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    //snowa = new Snow(random(100,700), 0, 20)

    //snowa setup
    for (var j = 40; j <=width; j=j+50) { 
      snowa.push(new Snow(j,75));
    }

    snowa.addImage(snowaImg);

    //snowb setup
    for (var j = 40; j <=width; j=j+50) { 
      snowb.push(new Snow(j,75));
    }

    snowb.addImage(snowbImg);

  createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
    if(backgroundImg){
    background(backgroundImg);
    
    }
    else{
      background(dayImg)
   }

   //snowa.display
   for (var j = 0; j < snowa.length; j++) {
    snowa[j].display();   
   }

    if(frameCount%60===0){
      snowa.push(new Snow(random(width/2-30, width/2+30),10, 10));
      score++;
    }

    //snowb display
    for (var j = 0; j < snowb.length; j++) {
      snowb[j].display();   
    }
      if(frameCount%60===0){
        snowb.push(new Snow(random(width/2-30, width/2+30),10, 10));
        score++;
      }
  

  //background(255,255,255);  
  drawSprites();
}

async function getTime(){
 var url = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var type = await url.json()
  var time = type.datetime.slice(11, 13);
  console.log(time);

  if(time>=8&&time<=16){
      bg = "snow1.jpg";
      
 }
if(time>=16&&time<=0){
   bg = "snow3.jpg";
 }

else{
    bg = "snow2.jpg";
  }



backgroundImg = loadImage(bg);
}