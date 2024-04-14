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

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('solid-bg'); // Add solid-bg class when scrolled
  } else {
    navbar.classList.remove('solid-bg'); // Remove solid-bg class when at top
  }
});
