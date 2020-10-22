var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,packOptions,ground;
var wall1Sprite,wall2Sprite,wall3Sprite;
var wall1Body,wall2Body,wall3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
 	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-5, width,10);   //ground sprite
	groundSprite.shapeColor="white";

	wall1Sprite=createSprite(200,500,25,200);
	wall1Sprite.shapeColor=color(255,0,0);
	
	wall2Sprite=createSprite(600,500,25,200);
	wall2Sprite.shapeColor=color(255,0,0);
	
	wall3Sprite=createSprite(400,600,400,25);
	wall3Sprite.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packOptions= {restitution:0.7, isStatic:true};

	packageBody = Bodies.circle(width/2 , 200 , 5 ,packOptions);
	World.add(world, packageBody);
	
	//Create a Ground- physical body for the ground
	ground = Bodies.rectangle(width/2, height-5, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	wall1Body = Bodies.rectangle(wall1Sprite.x, wall1Sprite.y, wall1Sprite.width, wall1Sprite.height , {isStatic:true} );
	World.add(world, wall1Body);
	 
	wall2Body = Bodies.rectangle(wall2Sprite.x, wall2Sprite.y, wall2Sprite.width, wall2Sprite.height , {isStatic:true} );
	World.add(world, wall2Body);
	 
	wall3Body = Bodies.rectangle(wall3Sprite.x, wall3Sprite.y, wall3Sprite.width, wall3Sprite.height , {isStatic:true} );
 	World.add(world, wall3Body);

	Engine.run(engine);

	console.log(packageBody);
}

//groundsprite line 27 and physical body of the ground line 40 should have the same x, y positions 
function draw() {
  background(0);
  Engine.update(engine);

  //package body and package  sprite should have the same x and y position
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  keyPressed(); 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	
	//changed here you wrote Matter.Body.setStatic() 
	//where as namespacing is already done on the top 
	//as Body = Matter.Body;
    Body.setStatic(packageBody,false);
  }
}