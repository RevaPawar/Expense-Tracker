const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.querySelector(".login-form");
const registrationForm = document.querySelector(".registration-form");

loginTab.addEventListener("click", function() {
    loginTab.style.backgroundColor = "#f2f2f2";
    registerTab.style.backgroundColor = "#fff";
    loginForm.style.display = "block";
    registrationForm.style.display = "none";
});

registerTab.addEventListener("click", function() {
    registerTab.style.backgroundColor = "#f2f2f2";
    loginTab.style.backgroundColor = "#fff";
    registrationForm.style.display = "block";
    loginForm.style.display = "none";
});
