$(document).ready(() => {
  $('#censo-form').on('submit', function (e) {
    e.preventDefault();

    $('#btn-submit').hide();

    const name = $('#name').val();
    const fathername = $('#fathername').val();
    const mothername = $('#mothername').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    const education = $('#nivel-edu').val();
    const location = $('#pueblo').val();
    const age = $('#edad').val();
    const condition = $('#condition').val();

    if (!email && !phone) {
      $('#messages')
        .html('<p> Debe probeer su email, número de teléfono o ambos')
        .addClass('alert alert-danger')
        .fadeIn();

      $('#btn-submit').show();

      setTimeout(() => {
        $('#messages').fadeOut().html().removeClass('alert alert-danger');
      }, 5000);
    } else {
      $(this).fadeOut();
      $('#btn-submit').hide();
      $('#messages')
        .addClass('alert alert-success')
        .html(
          '<p> Su formulario ha sido sometido.  Gracias por su participación. </p>'
        )
        .fadeIn();

      setTimeout(() => {
        window.location.href = 'censo.html';
      }, 8000);
    }
  });
});
