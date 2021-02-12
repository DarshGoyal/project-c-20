var bg,bgi,cat, mouse,mouse1,mouse2,mouse3,cat1,cat2,cat3;
function preload() {

    bgi = loadImage("images/garden.png");
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadImage("images/mouse4.png")

    cat1 = loadImage("images/cat1.png");  
    cat2 = loadAnimation("images/cat2.png","images/cat3.png"); 
    cat3 = loadImage("images/cat4.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,400,10,10);
    bg.addImage(bgi);

    cat = createSprite(850,600,20,20);
    cat.addImage(cat1);
    cat.scale = 0.2;
    cat.debug = true;

    mouse = createSprite(200,600,20,20);
    mouse.addImage(mouse1);
    mouse.scale = 0.15;
    mouse.debug = true;
    
}

function draw() {

    background(255);
 
    if(cat.x - mouse.x < cat.width/2 + mouse.width/2 &&
      mouse.x - cat.x < cat.width/2 + mouse.width/2 ){
        cat.velocityX = 0;
        cat.addImage(cat3);
        mouse.addImage(mouse3);
    }
      
    if(cat.y - mouse.y < cat.height/2 + mouse.height/2 &&
      mouse.y - cat.y < cat.height/2 + mouse.height/2){
        cat.velocityX = 0;
        cat.addImage(cat3);
        mouse.addImage(mouse3);
    }
    
      
    //Write condition here to evalute if tom and jerry collide
   
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX =-5;
        cat.addAnimation("catruning",cat2);
        
        cat.changeAnimation("catruning");
        
        mouse.addAnimation("teasing",mouse2);
      
        mouse.changeAnimation("teasing");
      }
    
  
//CHECK NOW 

}
