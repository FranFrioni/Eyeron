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



document.getElementById("btnLogIn").addEventListener("click", logIn);
document.getElementById("btnSignUp").addEventListener("click", signUp);

async function logIn(){
    const username = document.getElementById("usernameLogIn");
    const password = document.getElementById("passwordLogIn");
    const alert = document.getElementById("alertLogIn");
    
    let isValid = checkInputs(username.value, password.value, alert, "login");

    if (isValid){
        const response = await fetch('/users/' + username.value + "/" + password.value);
        const data = await response.json();
        if (!data){
            alert.classList.remove("d-none");
            alert.textContent = "The username or password are invalid."
        } else {
            //GUARDAR EN LOCAL STORAGE
            document.getElementById("divLogInSignUp").classList.add("d-none");
            document.getElementById("divMainGame").classList.remove("d-none");
            document.getElementById("navMainGame").classList.remove("d-none");
        }
    }
}

async function signUp(){
    const username = document.getElementById("usernameSignUp");
    const password = document.getElementById("passwordSignUp");
    const alert = document.getElementById("alertSignUp");
    
    let isValid = checkInputs(username.value, password.value, alert, "signUp");
    
    if (isValid){
        username.value = (username.value).charAt(0).toUpperCase() + (username.value).slice(1);
        const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({username: username.value, password: password.value})
		}
		const response = await fetch('/users', options);
        const data = await response.json();
        if (!data){
            alert.classList.remove("d-none");
            alert.textContent = "The username is already taken."
        } else {
            document.getElementById("divLogInSignUp").classList.add("d-none");
            document.getElementById("divMainGame").classList.remove("d-none");
            document.getElementById("navMainGame").classList.remove("d-none");
        }
    }
}

function checkInputs(username, password, alert, operation){
    let letters = /^[A-Za-z]+$/;
    if (!(username.match(letters))){
        alert.classList.remove("d-none");
        alert.textContent = "The username must not contain any special characters or spaces.";
    }else if (username === "" && password === ""){
        alert.classList.remove("d-none");
        alert.textContent = "The username and password are missing.";
    } else if (username === "") {
        alert.classList.remove("d-none");
        alert.textContent = "The username is missing.";
    } else if (password === ""){
        alert.classList.remove("d-none");
        alert.textContent = "The password is missing.";
    } else if (username.length < 3 && operation === "signUp") {
        alert.classList.remove("d-none");
        alert.textContent = "Your username must be at least 3 characters long.";
    } else if (password.length < 5 && operation === "signUp") {
        alert.classList.remove("d-none");
        alert.textContent = "Your password must be at least 5 characters long.";
    } else {
        alert.classList.add("d-none");
        return true;
    }
    return false;
}