let check =document.getElementById("check")
let btn = document.getElementById("btn")


btn.addEventListener('click',function(){
    let check1= check.checked


    if(check1 === true){
        alert("payment went succsesfuly")
    }
    else {
        alert("payment went wrong")
    }
})