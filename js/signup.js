
var signupButton = document.getElementById("signup-btn");
var errorMsg = document.getElementById("error-msg");

signupButton.addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username || !password) {
        errorMsg.textContent = "Both fields are required.";
    } else {
        if (localStorage.getItem(username)) {
            errorMsg.textContent = "User already exists. Please log in.";
        } else {
            localStorage.setItem(username, JSON.stringify({ password: password }));
            alert("Sign up successful! Redirecting to login...");
            window.location.href = "login.html";
        }
    }
});
