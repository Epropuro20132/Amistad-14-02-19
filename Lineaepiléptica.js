var hight = 5;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  for(var x = 5 ; x < 500; x = x + 10){
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(x,height/2,10,10);
  }
    
  
}
