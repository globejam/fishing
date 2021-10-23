var fishingRod;
var fishingRodImg;
var bg
function preload(){
fishingRodImg = loadImage("assets/FishingRod.png");
bg=loadImage("./assets/background.gif");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  //fishingRod = createSprite(windowWidth/2+200,windowHeight/2-200,10,10);
//fishingRod.addImage(fishingRodImg);
}

function draw() 
{
  background(bg);
drawSprites();
}




