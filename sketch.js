var pin1;
var pin_img;

var pin2;
var pin_img;

var pin3;
var pin_img;

var pin4;
var pin_img;

var pin5;
var pin_img;

var pin6;
var pin_img;

var pin7;
var pin_img;

var pin8;
var pin_img;

var pin9;
var pin_img;

var pin10;
var pin_img;

var bowl;
var bowl_img;

var bg;

function preload()
{
  pin_img = loadImage("black pin.png");
  bowl_img = loadImage("ball.png");
  bg = loadImage("background.jpg");

}

function setup() 
{
  createCanvas(displayWidth, displayHeight);
  
  pin1 = createSprite(displayWidth / 2 - 35, 345);
  pin1.addImage(pin_img);
  pin1.scale = 0.23;

  pin2 = createSprite(displayWidth / 2 + 35, 345);
  pin2.addImage(pin_img);
  pin2.scale = 0.23;

  pin3 = createSprite(displayWidth / 2, 355);
  pin3.addImage(pin_img);
  pin3.scale = 0.23;

  pin4 = createSprite(displayWidth / 2, 390);
  pin4.addImage(pin_img);
  pin4.scale = 0.23;

  pin5 = createSprite(displayWidth / 2 + 30, 384);
  pin5.addImage(pin_img);
  pin5.scale = 0.23;

  pin6 = createSprite(displayWidth / 2 - 30, 384);
  pin6.addImage(pin_img);
  pin6.scale = 0.23;

  pin7 = createSprite(displayWidth / 2 + 58, 373);
  pin7.addImage(pin_img);
  pin7.scale = 0.23;

  pin8 = createSprite(displayWidth / 2 - 58, 373);
  pin8.addImage(pin_img);
  pin8.scale = 0.23;

  pin9 = createSprite(displayWidth / 2 + 84, 365);
  pin9.addImage(pin_img);
  pin9.scale = 0.23;

  pin10 = createSprite(displayWidth / 2 - 84, 365);
  pin10.addImage(pin_img);
  pin10.scale = 0.23;

  bowl = createSprite(displayWidth / 2, displayHeight / 2 + 270);
  bowl.addImage(bowl_img);
  bowl.scale = 0.25;

}

function draw() 
{
  background(bg);

  bowl.x = mouseX;
  
  
  drawSprites();
}














