class Ball{
  constructor(){
    this.speed = 9.5;
    this.rad = 6;
    this.position = createVector(237, 300);
    this.velocity = p5.Vector.random2D();
  }

  move(){
    //The function that performs the physics
    this.position.add(this.velocity);
  }

  display(){
    //This function will simply display the ball
    noStroke();
    fill(255);
    ellipse(this.position.x, this.position.y, this.rad * 2, this.rad * 2);
  }

  wallCollide(){
    //right
    if (this.position.x > width - this.rad) {
      this.position.x = width - this.rad;
      this.velocity.x *= -1;
    }
    //bottom/slider right?
     if((this.position.x >= mouseX-45 && this.position.x <= mouseX+45) && (this.position.y <= 410 && this.position.y >= 390)){
      this.position.y = this.position.y - this.rad;
      this.velocity.y *= -1;
    }
    // left
    if (this.position.x < this.rad) {
      this.position.x = this.rad;
      this.velocity.x *= -1;
    }
    // top
    if(this.position.y < this.rad) {
      this.position.y = this.rad;
      this.velocity.y *= -1;
    }
  }

}

class Block{
  constructor(x1, y1, len, bred, red, green, blue){
    this.x1 = x1; this.y1 = y1;
    this.x2 = x1 + len; this.y2 = y1 + bred;
    this.len = len; this.bred = bred;
    this.red = red; this.green = green; this.blue = blue;
  }

  display(){
    fill(this.red, this.green, this.blue);
    rect(this.x1, this.y1, this.len, this.bred);
  }

  //Pass the ball object and use its attributes to check if this object was hit or no
  //If it was hit, return 1 and remove from array in the draw, else continue drawing the object
  hit(ball){
    if((ball.position.x >= this.x1 && ball.position.x <= this.x2) && (ball.position.y >= this.y1 && ball.position.y <= this.y2)){
      return true;
    }
    else{
      return false;
    }
  }
}

blockArray = [];

function setup() {
  createCanvas(500, 500);

  ball = new Ball();
  ball.velocity.mult(ball.speed);

  blockArray.push(new Block(50, 50, 40, 20, 250, 200, 20));
  blockArray.push(new Block(100, 50, 40, 20, 250, 200, 20));
  blockArray.push(new Block(150, 50, 40, 20, 250, 200, 20));
  blockArray.push(new Block(200, 50, 40, 20, 250, 200, 20));
  blockArray.push(new Block(250, 50, 40, 20, 250, 200, 20));
  blockArray.push(new Block(300, 50, 40, 20, 250, 200, 20));
  blockArray.push(new Block(350, 50, 40, 20, 250, 200, 20));
  blockArray.push(new Block(400, 50, 40, 20, 250, 200, 20));

  blockArray.push(new Block(100, 80, 40, 20, 150, 200, 20));
  blockArray.push(new Block(150, 80, 40, 20, 150, 200, 20));
  blockArray.push(new Block(200, 80, 40, 20, 150, 200, 20));
  blockArray.push(new Block(250, 80, 40, 20, 150, 200, 20));
  blockArray.push(new Block(300, 80, 40, 20, 150, 200, 20));
  blockArray.push(new Block(350, 80, 40, 20, 150, 200, 20));

  blockArray.push(new Block(150, 110, 40, 20, 180, 100, 90));
  blockArray.push(new Block(200, 110, 40, 20, 180, 100, 90));
  blockArray.push(new Block(250, 110, 40, 20, 180, 100, 90));
  blockArray.push(new Block(300, 110, 40, 20, 180, 100, 90));

  blockArray.push(new Block(200, 140, 40, 20, 10, 10, 150));
  blockArray.push(new Block(250, 140, 40, 20, 10, 10, 150));

  blockArray.push(new Block(225, 170, 40, 20, 100, 100, 100));
}

function draw(){
  background(0);

  fill(250,200,210);
  mousePos = map(mouseX, 0, 500, 0, 410, true);
  rect(mousePos,400,90,20);

  for(let i = 0; i < blockArray.length; i++){
    if(blockArray[i].hit(ball)){
      console.log("True");
      blockArray.splice(i, 1);
    }
  }

  for(let i = 0; i < blockArray.length; i++){
    blockArray[i].display();
  }

  ball.move();
  ball.wallCollide();
  ball.display();

}
