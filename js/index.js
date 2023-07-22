function checkPassword(event) {
    event.preventDefault(); // يمنع إرسال النموذج بشكل افتراضي

    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;

    if (password === "hamza") {
        window.location.href = "home.html";
    }
    else {
        alert("the password incorrect");
    }
}