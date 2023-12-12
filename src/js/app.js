<<<<<<< .merge_file_GwjOxt


=======
const fullImgBox = document.getElementById("fullImgBox");
fullImg = document.getElementById ("fullImg");


function openFullImg(reference){
    fullImgBox.style.display = "flex";
    fullImg.src = reference;
}

function closeImg() {
    fullImgBox.style.display = "none";
}


function subscribe() {
    let emailData = document.getElementById("emailContainer").value;
    let emailKey = "email";
    let emailList = localStorage.getItem(emailKey);
    emailList = emailList + ", " + emailData;
    localStorage.setItem(emailKey, emailList);
}
>>>>>>> .merge_file_ot3qWJ
