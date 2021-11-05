  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play",end
var fps

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  wallG = new Group();
  ghostg = new Group();
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  wallG.collide(ghostg)
  wallG.setDepthEach=1;
  ghostg.add(ghost);
}


function draw() {
  background(0);
 if(tower.y > 600 ){
      tower.y = 300
    } 
  
  if (gameState ==="play") {
    
    if(keyDown("left_arrow")){
        ghost.x = ghost.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("right_arrow")){
  
          ghost.x = ghost.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("space")){
  
         ghost.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;

   
      //write a condition for infinte scrolling tower
    
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy()
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var wall1 = createSprite(50,300,10,600)
    wall1.visible=false
    var wall2 = createSprite(550,300,10,600)
    wall2.visible=false
    var rand= Math.round(random(150,450))
    var door = createSprite(rand,-60);
    var climber = createSprite(door.x,-0);
    var invisibleBlock = createSprite(door.x,-0);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door
    
     
ghost.depth = door.depth;
    ghost.depth =1;
    
    //assign lifetime for the  door, climber and invisible block

 door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
    wallG.add(wall1,wall2)
  }
}

