function closeForm() {
  console.log('Cerrar formulario');
  window.location.href = '../../index.html';
}

var btnCerrar = document.getElementById('closeBtn');
btnCerrar.addEventListener('click', closeForm);
