const funLabel = document.getElementById("funLabel");
const gridCheck = document.getElementById("gridCheck");

gridCheck.addEventListener("change", function() {
  if (this.checked) {
    funLabel.textContent = "Party up!";
  } else {
    funLabel.textContent = "Check for fun!";
  }
});
$(document).ready(function() {
  $(".more-info button").click(function() {
    $(this).text($(this).text() === "Abre el formulario" ? "Cierra el formulario" : "Abre el formulario");
    $(this).parent().siblings(".container-fluid").toggle();
  });
});

const navbar = document.querySelector('.navbar');
const delay = 100;

window.addEventListener('scroll', function() {
  if (window.scrollY > delay) {
    navbar.classList.add('solid-bg');
  } else {
    navbar.classList.remove('solid-bg');
  }
});