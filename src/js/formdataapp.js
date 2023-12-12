(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


// function subscribe() {
//   let emailData = document.getElementById("emailContainer").value;
//   let emailKey = "email";
//   let emailList = localStorage.getItem(emailKey);
//   emailList = emailList + ", " + emailData;
//   localStorage.setItem(emailKey, emailList);
// }