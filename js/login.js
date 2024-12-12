var loginButton = document.getElementById("login-btn");
var errorMsg = document.getElementById("error-msg");

loginButton.addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username || !password) {
        errorMsg.textContent = "Both fields are required.";
    } else {
        var storedUser = localStorage.getItem(username);

        if (!storedUser) {
            alert("User not found. Redirecting to Sign Up...");
            window.location.href = "signup.html";
        } else {
            var userData = JSON.parse(storedUser);
            if (userData.password === password) {
                localStorage.setItem("loggedInUser", username); 
                window.location.href = "welcome.html";
            } else {
                errorMsg.textContent = "Incorrect password.";
            }
        }
    }
});

