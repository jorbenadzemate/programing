let num1Input = getElementById("num1")
let num2Input= getElementById("num2")
let h2=Document.getElementById("h2")

   
btn.addEventListener('click',function(){
    h2.textContent=Number(num1Input) + Number(num2Input)
    
})
