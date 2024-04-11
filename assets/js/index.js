$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

$(document).ready(function() {
    $('#sendEmailButton').click(function() {
      $('#sendEmailModal').modal('show');
    });
  
    $('#sendEmailModal').on('submit', 'form', function(event) {
      event.preventDefault();
  
      const email = $('#emailInput').val();
  
      console.log('Sending email to:', email);
  
      alert('Correo enviado!');
  
      $('#sendEmailModal').modal('hide');
    });
  });
  
$(document).ready(function() {
    $("h6").on("dblclick", function() {
      $(this).css("color", "red");
    });
  });

  $(document).ready(function() {
    $(".more-info button").click(function() {
      $(this).text($(this).text() === "Cuéntame más" ? "Quiero ver menos" : "Cuéntame más");
      $(this).parent().siblings(".text").toggle();
    });
  });
  
  function checkScreenSize() {
    if (window.innerWidth < 768) {
      document.getElementById("desktop-content").style.display = "none";
    } else {
      document.getElementById("dektop-content").style.display = "block";
    }
  }
  
  window.onload = checkScreenSize;
  window.onresize = checkScreenSize;
  