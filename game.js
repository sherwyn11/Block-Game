let x,y;
 let check=0;



//Position of left hand side of floor
let base1;

//Position of right hand side of floor
let base2;
//Length of floor
//let baseLength;

// Variables related to moving ball
let position;
let velocity;
let r = 6;
let speed = 9.5;

function setup() {
  createCanvas(500, 500);

  fill(128);

  //createGround();

  //start ellipse at middle top of screen
  position = createVector(237, 300);

  //calculate initial random velocity
  velocity = p5.Vector.random2D();
  velocity.mult(speed);
}

function draw() {
  //draw background

  rect(0, 0, width, height);
  background("#000000");
  fill(250,200,210);
  rect(mouseX,400,90,20)
  base1 = createVector(0,600);
  base2 = createVector(600,600);
 if(check==0){

  fill(250,200,20);
  rect(50,50,40,20);
 }
  fill(250,200,20);
  rect(100,50,40,20);
  rect(150,50,40,20);
  rect(200,50,40,20);
  rect(250,50,40,20);
  rect(300,50,40,20);
  rect(350,50,40,20);
  rect(400,50,40,20);
  fill(150,200,20);
  rect(100,80,40,20);
  rect(150,80,40,20);
  rect(200,80,40,20);
  rect(250,80,40,20);
  rect(300,80,40,20);
  rect(350,80,40,20);
  fill(180,100,90);
  rect(150,110,40,20);
  rect(200,110,40,20);
  rect(250,110,40,20);
  rect(300,110,40,20);
  fill(10,10,150);
  rect(200,140,40,20);
  rect(250,140,40,20);
  fill(100,100,100);
  rect(225,170,40,20);
   fill(100,150,100);
  ellipse(x,y,10,10)

  //draw base

  let baseDelta = p5.Vector.sub(base2, base1);
  baseDelta.normalize();
  let normal = createVector(-baseDelta.y, baseDelta.x);
  let intercept = p5.Vector.dot(base1, normal);

  //draw ellipse
  noStroke();
  fill(255);
  ellipse(position.x, position.y, r * 2, r * 2);

  //move ellipse
  position.add(velocity);

  //normalized incidence vector
  incidence = p5.Vector.mult(velocity, -1);
  incidence.normalize();


  //}

  // detect boundary collision
  // right
  if (position.x > width - r) {
    position.x = width - r;
    velocity.x *= -1;
  }

   if ((position.x >= mouseX-45 && position.x <= mouseX+45)  &&(position.y <= 410 && position.y >= 390)) {
    position.y = position.y - r;
    velocity.y *= -1;
  }
  // left
  if (position.x < r) {
    position.x = r;
    velocity.x *= -1;
  }
  // top
  if (position.y < r) {
    position.y = r;
    velocity.y *= -1;

  }

  if((position.x <= 90 && position.x >= 50) && (position.y >= 50 && position.y <= 70)){

    check=1
    position.y = r;
    velocity.y *= -1;
    position.x = r;
    velocity.x *= -1;
    mouse1Pressed();

  }

function mouse1Pressed(){

  fill(250,200,20);
  rect(100,50,40,20);
  rect(150,50,40,20);
  rect(200,50,40,20);
  rect(250,50,40,20);
  rect(300,50,40,20);
  rect(350,50,40,20);
  rect(400,50,40,20);
  fill(150,200,20);
  rect(100,80,40,20);
  rect(150,80,40,20);
  rect(200,80,40,20);
  rect(250,80,40,20);
  rect(300,80,40,20);
  rect(350,80,40,20);
  fill(180,100,90);
  rect(150,110,40,20);
  rect(200,110,40,20);
  rect(250,110,40,20);
  rect(300,110,40,20);
  fill(10,10,150);
  rect(200,140,40,20);
  rect(250,140,40,20);
  fill(100,100,100);
  rect(225,170,40,20);
   fill(100,150,100);
  ellipse(x,y,10,10)
  redraw();
}
}
