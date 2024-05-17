// colour_flipper.js
function colorGenerator() {
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  let red = parseInt(Math.random() * 255);
  
  document.getElementById("m").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementById("n").textContent = "rgb(" + red + "," + green + "," + blue + ")";
}
