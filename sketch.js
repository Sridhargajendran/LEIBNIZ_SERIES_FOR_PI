let pi = 4;
let iterations = 0;
let div;
let history = [];

function setup() {
  createCanvas(600, 400);
  //frameRate(1);

  //for (var i = 0; i < 1000; i++) {

  //}
  div = createDiv(pi).style("font-size", "46pt");
}

function draw() {
  background(0);

  let piY = map(PI, 2, 4, height, 0);
  line(0, piY, width, piY);
  let den = iterations * 2 + 3;
  if (iterations % 2 == 0) {
    pi -= 4 / den;
  } else {
    pi += 4 / den;
  }

  div.html(pi);
  history.push(pi);
  beginShape();
  stroke(255);
  noFill();
  let spacing = width / history.length;
  for (var i = 0; i < history.length; i++) {
    let x = i * spacing;
    let y = map(history[i], 2, 4, height, 0);
    vertex(x, y);
  }
  endShape();
  iterations++;
}
