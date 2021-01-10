window.addEventListener('DOMContentLoaded', () => {
  const censoForm = document.querySelector('#censo-form');
  const sendEmailBtn = document.querySelector('#btn-email');

  sendEmailBtn.addEventListener('click', () => {
    alert('Esta funcionalidad todavía no ha sido implementada');
    return;
  });

  censoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    $('#btn-submit').hide();
    $('#loader').show();

    const data = new FormData(this);

    const name = document.querySelector('#name').value;
    const fathername = document.querySelector('#fathername').value;
    const mothername = document.querySelector('#mothername');
    const edad = document.querySelector('#edad').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const pueblo = document.querySelector('#pueblo').value;
    const edu = document.querySelector('#nivel-edu').value;
    const condition = document.querySelector('#condition').value;

    if (!email || !phone) {
      $('#danger')
        .show()
        .html('Debe probeer un número de teléfono, o su email o ambos');

      setTimeout(() => {
        $('#danger').hide();
      }, 5000);

      $('#loader').hide();
      $('#btn-submit').show();
      return;
    } else {
      $('#success').show();

      setTimeout(() => {
        $('#success');
      }, 5000);
    }

    $('#censo-form').reset();

    return;
  });
});
