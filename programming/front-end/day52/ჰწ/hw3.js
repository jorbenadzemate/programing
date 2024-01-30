let name1 =document.getElementById("name")
let surname =document.getElementById("lsname")
let age=document.getElementById("age")
let btn=document.getElementById("btn")


let usrinf={
    name1 ,
    surname,
    age
}


btn.addEventListener("click",function(){
    console.log(usrinf.age.value,
    name1.value,surname.value)
})