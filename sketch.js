const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time = 0;

function preload() {
     getBackground()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }
       function time(){
            if(this.time<0 && this.time>-1005){
              score ++ 
              fill("blue")
              textSize(20);
              text ("time : " + time, 990,40)
            
            }
        
    Engine.update(engine);
    }

}
            async function getBackground(){
                var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
                var responseJson = await response.json()
                var dateTime = responseJson.datetime;
                var hour = dateTime.slice(11,13);
                if (hour>04 && hour<06){
                    bg = "sunrise1.png"
                } else if (hour>06 && hour<08) {
                    bg  = "sunrise2.png"
                }else if (hour>08 && hour<10) {
                    bg  = "sunrise3.png"
                }else if (hour>10 && hour<12) {
                    bg  = "sunrise4.png"
                }else if (hour>12 && hour<14) {
                    bg  = "sunrise5.png"
                }else if (hour>14 && hour<16) {
                    bg  = "sunrise6.png"
                }else if (hour>16 && hour<18) {
                    bg  = "sunset7.png"
                }else if (hour>18 && hour<20) {
                    bg  = "sunset8.png"
                }else if (hour>20 && hour<23) {
                    bg  = "sunset9.png"
                }else if (hour>23 && hour==0) {
                    bg  = "sunset10.png"
                }else if (hour==0 && hour<03) {
                    bg  = "sunset11.png"
                }else{
                    bg = "sunset11.png"
                }    


                backgroundImg = loadImage(bg);
            
            }
