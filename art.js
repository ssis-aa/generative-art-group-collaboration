function setup() {
  createCanvas(400, 400);
  background(220);
  // Draw a circle at location (30, 30) with a diameter of 20.
  circle(30, 30, 20);
  
  // Change by Dan
  rect(50, 50, 55, 55);
  
  // Change by Khang
  let c1 = color(0,0,255)
  fill(c1)
  triangle(0, 0, 200, 50, 400, 0);
  let c2 = color(255,0,0)
  fill(c2)
  triangle(400, 400, 200, 50, 0, 400);
  
  // Change by William
  
  
  // Change by Dongjae
  
  
  // Change by mk
  dx = 300
  dy = 150
  line(30 + dx, 20 + dy, 85 + dx, 20 + dy);
  stroke(126);
  line(85 + dx, 20 + dy, 85 + dx, 75 + dy);
  stroke(255);
  line(85 + dx, 75 + dy, 30 + dx, 75 + dy);
  noStroke()
  fill(color(77,220,77));
  rect(30 + dx, 21 + dy, 53, 53);
}

function draw() {
  //background(220);
}
