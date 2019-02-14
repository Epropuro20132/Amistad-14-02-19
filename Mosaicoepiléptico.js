var hight = 5;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  for(var y = 5; y < 500; y = y + 10){
    for(var x = 5 ; x < 500; x = x + 10){
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(x,y,10,10);
    }
  }
  
}
