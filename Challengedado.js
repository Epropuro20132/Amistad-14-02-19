var num

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  rect(50,50,300,300,10);
  if (mouseIsPressed){
    num = int(random(1,7));
  }
    
  if (num == 1){
    uno();
  }
  if (num == 2){
    dos();
  }
  if (num == 3){
    tres();
  }
  if (num == 4){
    cuatro();
  }
  if (num == 5){
    cinco();
  }
  if (num == 6){
    seis();
  }
}

function uno(){
  fill(0);
  ellipse(200,200,50,50);
}

function dos(){
  fill(0);
  ellipse(100,100,50,50);
  ellipse(300,300,50,50);
}

function tres(){
  dos();
  uno();
}

function cuatro(){
  dos();
  ellipse(100,300,50,50);
  ellipse(300,100.50,50);
}

function cinco(){
  cuatro();
  uno();
}

function seis(){
  cuatro();
  ellipse(100,200,50,50);
  ellipse(300,200,50,50);
}
