var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
  redImg = loadImage("redimage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (keyDown("d")) {
    rabbit.x=rabbit.x+15
    }
    if (keyDown("a")) {
    rabbit.x=rabbit.x-15
    }
  spawnredleaf()
  spawnleaf()
  spawnapple()
  drawSprites();
}
function spawnapple(){
  if(frameCount%130===0){
    apple=createSprite(600,100,70,13)
    apple.velocityY=5
    apple.x=Math.round(random(1,350))
    apple.addImage(appleImg)
    apple.scale=0.1
    rabbit.depth=apple.depth
    rabbit.depth=rabbit.depth+1
  }
}
function spawnleaf(){
  if(frameCount%50===0){
    leaf=createSprite(600,100,70,13)
    leaf.velocityY=5
    leaf.x=Math.round(random(1,350))
    leaf.addImage(leafImg)
    leaf.scale=0.1
    rabbit.depth=leaf.depth
    rabbit.depth=rabbit.depth+1
  }
}
function spawnredleaf(){
  if(frameCount%50===0){
    leaf1=createSprite(600,100,70,13)
    leaf1.velocityY=5
    leaf1.x=Math.round(random(1,350))
    leaf1.addImage(redImg)
    leaf1.scale=0.1
    rabbit.depth=leaf1.depth
    rabbit.depth=rabbit.depth+1
  }
}