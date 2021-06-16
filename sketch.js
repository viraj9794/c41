var database;
var gameState=0;
var game;
var form;
var player;
var playerCount = 0;
var allPlayers;
var car1, car2, car3, car4, cars;
var cars1, cars2, cars3, cars4, track, track2;

function preload(){
cars1=loadImage("images/car1.png");
cars2=loadImage("images/car2.png");
cars3=loadImage("images/car3.png");
cars4=loadImage("images/car4.png");
track=loadImage("images/track.jpg");
}
function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(displayWidth, displayHeight);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if(playerCount === 4){
    game.updateState(1);
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
