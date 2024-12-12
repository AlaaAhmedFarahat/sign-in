const username = localStorage.getItem("loggedInUser");
        if (!username) {
            window.location.href = "login.html";
        } else {
            document.getElementById("user-name").textContent = username;
        }


        const logoutBtn = document.getElementById("logout-btn");
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser"); 
            window.location.href = "login.html"; 
        });