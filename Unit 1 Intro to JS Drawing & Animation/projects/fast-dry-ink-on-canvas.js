// this is a drawing project where we can draw lines on the canvas
// to draw click and drag your mouse on the canvas
// if you want to start over just refresh the page

// requirements: 
// (true) - a variable
// (true) - a conditional 
// (true) - a loop 
// (true) - a unique function 

var lines = []; // this is a list, "Array" to keep track of all the lines we draw
var lineColor; // variable to store the color of the line
var lineThickness; // variable to store the thickness of the line

function setup() { 
  // this function sets up our drawing canvas when we start
  createCanvas(400, 400); // it makes a square canvas that's 400 pixels wide and tall
  background(220); // it sets the background color to a light grey
  
  lineColor = color(255, 128, 237); // initialize line color to pink
  lineThickness = 3; // initialize thinkness of the brush
  setBrushProperties(lineColor, lineThickness); // sets brush color to pink and thickness to 3px
}

function setBrushProperties(colorLine, thickness) {
  // this function sets the properties of the brush (line color and thickness)
  lineColor = colorLine;
  lineThickness = thickness;
}

function mouseDragged() {
  // this function is called whenever we drag the mouse on the canvas
  
  // we create a new line where the mouse is
  var newLine = {
    x1: pmouseX, // this is where the mouse was before moving (X-axis)
    y1: pmouseY, // this is also where the mouse was before moving (Y-axis)
    x2: mouseX,  // this is where the mouse is now (X-axis)
    y2: mouseY,  // this is also where the mouse is now (Y-axis)
    color: lineColor, // use the current line color
    thickness: lineThickness // use the current line thickness
  };
  lines.push(newLine); // we add the new line to our list of lines
}

function draw() { 
  background(220); // Clear the canvas and set the background color

  // here we go through all the lines we have drawn so far
  for (var i = 0; i < lines.length; i++) { // "for loop"
    var lineObj = lines[i]; // we take one line out of our list
    stroke(lineObj.color); // we choose the color for the line
    strokeWeight(lineObj.thickness); // we set the thickness of the line
    line(lineObj.x1, lineObj.y1, lineObj.x2, lineObj.y2); // we draw the line on the canvas
  }

  // if we have drawn more than 150 lines, we start removing the oldest ones
  if (lines.length > 150) {
    lines.splice(0, 1); // this removes the first line in our list
  }
}

// Uncomment this function to enable changing brush color on mouse click
// function mouseClicked() {
//   // change brush color to a random color and thickness to 4
//   // draws only with light colors because of random 155-255 values for RGB
//   setBrushProperties(color(random(155,255), random(155,255), random(155,255)), 4);
// }