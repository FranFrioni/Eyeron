document.getElementById("btnChangeToSignUp").addEventListener("click", changeToSignUp);
document.getElementById("btnChangeToLogIn").addEventListener("click", changeToLogIn);

function changeToSignUp(){
    document.getElementById("divLogIn").classList.add("d-none");
    document.getElementById("divSignUp").classList.remove("d-none");
}
function changeToLogIn(){
    document.getElementById("divSignUp").classList.add("d-none");
    document.getElementById("divLogIn").classList.remove("d-none");
}