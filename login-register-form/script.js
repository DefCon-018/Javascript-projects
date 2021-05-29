let login = document.getElementById('login');
let register= document.getElementById('register');
let btn = document.querySelector('.btn');

function handleRegister(){
    register.style.left = "100px";
    login.style.left = "-550px";
    btn.style.left= "50%"
    btn.style.right = "0px"
}

function handleLogin(){
    register.style.left = "560px";
    login.style.left = '100px';
    btn.style.left = "0px";
}