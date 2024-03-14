const pass=document.getElementById("pass")
const pass1=document.getElementById("pass1")
const btn=document.getElementById("btn")

btn.addEventListener("submit",function(e){
    e.preventDefault()

    if (pass.value===pass1.value){
        alert("acount created succsesfully")
    }else{
        alert("something is wrong")
    }
})

