const n1 = document.getElementById("num1")
const n2 =document.getElementById("num2")
const btn=document.getElementById("btn")



btn.addEventListener("click",function(){
    alert(Number(n1.value) + Number(n2.value))
})


