
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var superman
var chain
var ground
function preload() {
//preload the images here

//bg=loadImage("images/bg1.jpg");



}

function setup() {
  createCanvas(3000, 800);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  // create sprites here
superman = new Superman(100,250,70,50);
ground  = new Ground(100,100,200,200)







}

function draw() {
  //background(bg);
  background(ground);
  Engine.update(myEngine);
  superman.show()
  ground.show()

 

}

