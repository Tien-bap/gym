function show_login(){
    document.getElementById("login").style.display = "block";
    document.getElementById("header").style.display = "none";
    document.getElementById("content").style.display = "none";
}
function hidden_login(){
    ducoment.getElementById("login").style.display ="none";
    document.getElementById("header").style.display = "block";
    document.getElementById("content").style.display = "block";
}

function show_sign_up(){
    document.getElementById("login").style.display = "none";
    document.getElementById("sign_up").style.display = "block";
}

function eye(){
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#id_password');

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type',type);
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
}

function eye_signup(){
    const togglePassword = document.querySelector('#togglePassword_signup');
    const password = document.querySelector('#id_password_signup');

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type',type);
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
}

