
function subscribe() {
  let emailData = document.getElementById("emailContainer").value;
  let emailKey = "email";
  let emailList = localStorage.getItem(emailKey);
  emailList = emailList + ", " + emailData;
  localStorage.setItem(emailKey, emailList);
}