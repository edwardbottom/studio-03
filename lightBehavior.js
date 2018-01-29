

// Setup variables to access commonly used DOM elements

// Variables representing elements on the "Basic" screen (no need to modify)
var currentColor
var targetColor
var redSlider
var redLabel
var greenSlider
var greenLabel
var blueSlider
var blueLabel

// Variables representing elements on the "Settings" screen (no need to modify)
var autoOffButton
var autoOffTimeSlider


// Utility Function: Convert an RGB values (in tegers) to a string for use in HTML/CSS styles.
function rgb(r,g,b) {
  return "rgb(" + r + "," + g + ","  b + ")";
}

// Update the current color to reflect the positions of the sliders
function updateCurrentColor() {
  // TODO: Use the "rgb() function and set the background color of the targetColor
  // based on the sliders
  // TODO / HINT: Use the .value property to get the sliders value.
  // The values are 0-100, but you need to convert them to 0-255.
  // Printing values may aid with debugging to spot any problems.
  // var red = ...
  // targetColor.style.background = rgb(red, green, blue)
}

function setColorClicked(event) {
  console.log("setColorClicked() clicked")
  currentColor.style.backgroundColor = targetColor.style.backgroundColor
}

function redSliderChange(event) {
  redLabel.text = redSlider.value
  updateCurrentColor()
}

// TODO: Add other helper functions to complete UI behavior


// On startup:  Things to do once the page is fully loaded and the DOM is configured
document.addEventListener("DOMContentLoaded", function(event) {
  // NOTE: console.log() can help you understand the order of execution of your code.
  console.log("Document Loaded")
  // NOTE: Setup all the variables now that they are in the DOM
  currentColor = document.getElementById("currentColor")
  targetColor = document.getElementById("targetColor")
  redSlider = document.getElementById("redSlider")
  redLabel = document.getElementById("redLabel")
  greenSlider = document.getElementById("greenSlider")
  greenLabel = document.getElementById("greenLabel")
  blueSlider = document.getElementById("blueSlider")
  blueLabel = document.getElementById("blueLabel")

  // TODO: Setup Variables representing elements on the "Settings" screen
  //  autoOffButton =
  //  autoOffTimeSlider =

  // NOTE: addEventListener is preferred here because you can use it to add multiple event listeners (if desired)
  document.getElementById("setColorButton").addEventListener("click", setColorClicked)
  document.getElementById("redSlider").addEventListener("change", redSliderChange)
  // TODO: Add remaining event listeners

  // TODO: Set initial values of all controls.
})
