let nameInput=registration.getElementById('name')
let surnameInput=registration.getElementById('surname')
let emailInput=registration.getElementById('email')
let passwordInput=registration.getElementById('password')
let birthInput=registration.getElementById('birthdate')
let sub=registration.getElementById('submit')

    
sub.addEventListener('click',function(){
    console.log(nameInput.value)
    console.log(surnameInput.value)
    console.log(emailInput.value)
    console.log(passwordInput.value)
    console.log(birthInput.value)
   
})



