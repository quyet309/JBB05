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





  
  const handleSignUp = () => {
    event.preventDefault()
const Emailquery  = document.querySelector('#Email')
const EmailVal=Emailquery.value
const Passquery = document.querySelector('#pass')
const PassVal=Passquery.value
const Repassquery=document.querySelector('#re-password')
const RepassVal=Repassquery.value
const namequery=document.querySelector('#name')
const nameVal=namequery.value
  
    
    if (
      EmailVal !== '' &&
      PassVal !== '' &&
      PassVal.length >= 5 &&
      EmailVal.includes('@') && PassVal === RepassVal && nameVal !== '' && nameVal.length >5
    ) {
      localStorage.setItem(
        'Register',
        JSON.stringify({
          email: EmailVal,
          password: PassVal,
          displayName:nameVal
        })
      )
  
      alert('Sign up success')
    } else {
      alert('Sign up fail')
    }
  }





  // const mapPokemon=(params)=>{
  //   console.log(params)
  //   return params.map(

  //   )
  // }


  // const POKEMON_API_URL="https://pokeapi.co/api/v2/ability/?limit=20&offset=20"

  // const getPokemon=async()=>{
  //   const res=await axios.get(POKEMON_API_URL)
  //   console.log(res)
  //   const result =pokedata.results
  //   console.log(result)

  // }
  const handleSignIn=()=>{
    event.preventDefault()
const mailInquery  = document.querySelector('#Email-in')
const maVal=mailInquery.value
const passInquery = document.querySelector('#pass-in')
const paVal=passInquery.value
 const dataFromStorage = localStorage.getItem('Register')

 const parseData = JSON.parse(dataFromStorage)
 
 if(
  maVal === parseData.email && maVal.length > 6 && maVal !== 0 && paVal === parseData.password && paVal.length >5
 ) {
  alert('Success')
  window.location = "https://www.google.com/"
 } else {
  alert('Login failed')
 }

}

    
  