let font,
  fontsize = 20;
function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('Kolby-Bold.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

}
function draw() {
  background(0,0,255);
  fill(255,60,0)
  noStroke()
  
  ellipse(mouseY,mouseX,60,50)
  ellipse(30+mouseX,60+mouseX,60,50)
  ellipse(100+mouseY,60+mouseY,60,50)
    ellipse(100+mouseX,10+mouseY,60,50)
    ellipse(250+mouseY,300+mouseY,60,50)
  ellipse(2+mouseX,300+mouseY,60,50)
  
    ellipse(-mouseY,-mouseX,60,50)
  ellipse(-300+mouseX,-60+mouseX,60,50)
  ellipse(-10+mouseY,-60+mouseY,60,50)
    ellipse(-100+mouseX,-10+mouseX,60,50)
    ellipse(-25+mouseY,-300+mouseY,60,50)
  ellipse(-25+mouseX,-300+mouseY,60,50)
  
   ellipse(-100+mouseX,-10+mouseX,60,50)
    ellipse(-25+mouseY,-300+mouseY,60,50)
  ellipse(-25+mouseX,-300+mouseY,60,50)

  
    ellipse(-mouseY,mouseX,10,50)
  ellipse(-30+mouseX,60+mouseY,60,50)
  ellipse(10+mouseY,-60+mouseX,60,50)
    ellipse(-100+mouseY,10+mouseX,60,50)
    ellipse(25+mouseY,-300+mouseX,60,50)
  ellipse(-25+mouseX,300+mouseX,60,50)
  
   ellipse(25*mouseY,-300+mouseX,60,50)
  ellipse(-25*mouseX,300+mouseX,60,50)

  


  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(CENTER);
  drawWords();

  // Align the text to the left
  // and run drawWords() in the right third of the canvas

}
function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0,0,150);
  text('jaj', 30+mouseX,60+mouseX);

  fill(0,0,150);
  text('jaj', mouseY,mouseX);

  fill(0,0,150);
  text('jaj',100+mouseY,60+mouseY);
  
   fill(0,0,150);
  text('jaj',100+mouseX,10+mouseY);
  
   fill(0,0,150);
  text('jaj',250+mouseY,300+mouseY);
  
  
   fill(0,0,150);
  text('jaj',-mouseY,-mouseX);

  fill(0,0,150);
  text('jaj',-300+mouseX,-60+mouseX);
  
  fill(0,0,150);
  text('jaj',-10+mouseY,-60+mouseY);
  
  fill(0,0,150);
  text('jaj',-100+mouseX,-10+mouseX);
  
  fill(0,0,150);
  text('jaj',-25+mouseY,-300+mouseY);
  
  fill(0,0,150);
  text('jaj',-25+mouseX,-300+mouseY);
  
  fill(0,0,150);
  text('jaj',-100+mouseX,-10+mouseX);
  
  fill(0,0,150);
  text('jaj',-25+mouseY,-300+mouseY);
  
  fill(0,0,150);
  text('jaj',-mouseY,mouseX);
  
  fill(0,0,150);
  text('jaj',-30+mouseX,60+mouseY);
  
  fill(0,0,150);
  text('jaj',10+mouseY,-60+mouseX);
  
  fill(0,0,150);
  text('jaj',-100+mouseY,10+mouseX);
  fill(0,0,150);
  text('jaj',25+mouseY,-300+mouseX);
  fill(0,0,150);
  text('jaj',-25+mouseX,300+mouseX);
  fill(0,0,150);
  text('jaj',25*mouseY,-300+mouseX);
  fill(0,0,150);
  text('jaj',-25*mouseX,300+mouseX);

}


