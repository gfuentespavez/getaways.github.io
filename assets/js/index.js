const funLabel = document.getElementById("funLabel");
const gridCheck = document.getElementById("gridCheck");

gridCheck.addEventListener("change", function() {
  if (this.checked) {
    funLabel.textContent = "Party up!";
  } else {
    funLabel.textContent = "Check for fun!";
  }
});
