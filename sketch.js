var canvas;
var music;
var bar1;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    bar1 = createSprite(750,500,50,70);
    ball = createSprite(400,500,50,50);
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    deawSprites();
    bar1.shapecloer = ("red");
    ball.shapecloer = ("red");
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
