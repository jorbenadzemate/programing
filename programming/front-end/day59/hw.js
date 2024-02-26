
let nameInput=document.getElementById('name')
let emailInput=document.getElementById('email')
let passwordInput=document.getElementById('password')
let sub=document.getElementById('btn')
let userinfo=document.getElementById("userinfo")


sub.addEventListener('click',function(){
  userinfo.textContent=nameInput.value,emailInput.value,passwordInput.value
})
