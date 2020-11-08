var particles = [];

let noiseY;
let noiseSpeed = 0.01;
let noiseHeight = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //for (var i = 0; i < 10; i++) {
  //  particles[i] = new Particle(random(width), 100, random(2, 4));
  //}
   noiseY = height * 3 / 4;

}

function mousePressed() {
  var p = new Particle(mouseX, mouseY, random(2, 4))
  particles.push(p);
}

function keyPressed() {
  if ( key == ' ') {
    particles.splice(0, 1);
  }
}

function draw() {
  background(51, 15);
  
  
    for (let j = 0; j < 3; j++) {
    let offsetY = j * 100;
    noFill();
    stroke(0, 0, 255, 10);
    strokeWeight(height / 2);
    beginShape();
    curveVertex(0, height / 2);
    for (let i = 0; i < width; i += 50) {
      let y = noise(frameCount * noiseSpeed + i + j) * noiseHeight + noiseY + offsetY;
      curveVertex(i, y);
    }
    curveVertex(width, height / 2);
    endShape(LINES);
    }
  
  
  var wind = createVector(0.1, 0);
  
  for (var i = 0; i < particles.length; i++) {
  var gravity = createVector(0, 0.2*particles[i].mass);
  particles[i].applyForce(gravity);
  if (mouseIsPressed) {
    particles[i].applyForce(wind);
  }

  particles[i].update();
  particles[i].edges();
  particles[i].display();
  }
  
  
}

function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  
  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    this.acc.set(0, 0);
  }
  
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
  
  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }
    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }
}

  for (let j = 0; j < 3; j++) {
    let offsetY = j * 100;
    noFill();
    stroke(0, 0, 255, 10);
    strokeWeight(height / 2);
    beginShape();
    curveVertex(0, height / 2);
    for (let i = 0; i < width; i += 50) {
      let y = noise(frameCount * noiseSpeed + i + j) * noiseHeight + noiseY + offsetY;
      curveVertex(i, y);
    }
    curveVertex(width, height / 2);
    endShape(LINES);
  }