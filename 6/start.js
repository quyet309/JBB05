
// window.location = "https://www.google.com/"

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');



signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});



let email = document.getElementById('email');
let pass = document.getElementById('pass');
let name = document.getElementById('name');
let pa = document.getElementById("passed")

let email_Li = document.getElementById('emal');
let pass_Li = document.getElementById('pas');


let m = "";
let p = "";

function checkEmpty() {
    if (email.value == "") {
        alert("vui long nhap email")
        return false;
    }
    if (pass.value == "") {
        alert("vui long nhap pass")
        return false;
    }
    if (name.value == "") {
        alert("vui long nhap name")
        return false;
    }


    if (pass.value != pa.value) {
        alert("vui lòng nhập lại password!")
        return false;

    }
    else {
        m = email.value;
        p = pass.value;
        container.classList.remove('right-panel-active');


       

    }
}




let nam = document.getElementById('emal');
let pas = document.getElementById('pas');
function checkedEmpty() {
    if (nam.value == "") {
        alert("vui long nhap email")
    }
    else (nam.value == "text")

    if (pas.value == "") {
        alert("vui long nhap pass")
    }
    else (pas.value == "text")
}

const defaultLogin = {
    username: 'admin',
    password: 'admin',
  }
  
  localStorage.setItem('login', JSON.stringify(defaultLogin))
  
  const userInput = document.querySelector('#username')
  const passwordInput = document.querySelector('#password')
  const loginValue = JSON.parse(localStorage.getItem('login')) // string
  
  console.log(loginValue)
  
  const handleLogin = () => {
    event.preventDefault()
  
    const usernameValue = userInput.value
    const passwordValue = passwordInput.value
  
    if (
      usernameValue === loginValue.username &&
      passwordValue === loginValue.password
    ) {
      alert('Login success')
    } else {
      alert('Login fail')
    }
  }
  
  const handleSignUp = () => {
    event.preventDefault()
  
    const usernameValue = userInput.value // giá trị của ô email
    const passwordValue = passwordInput.value // giá trị của của ô password
  
    if (
      usernameValue !== '' &&
      passwordValue !== '' &&
      passwordValue.length >= 5 &&
      usernameValue.includes('@')
    ) {
      localStorage.setItem(
        'userInfo',
        JSON.stringify({
          username: usernameValue,
          password: passwordValue,
        })
      )
  
      alert('Sign up success')
    } else {
      alert('Sign up fail')
    }
  }



