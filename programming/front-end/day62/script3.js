


let form=document.getElementById("form")


let acc={

}


btn.addEventListener("click",function(e){
    e.preventDefault()
    const username = form.elements.username.value;
    const password = form.elements.password.value;

    if(username.length >= 5 && password.length >= 8){
        acc.username = username;
        acc.password = password;
    } else{
        alert("Username must be 5 chr long and password must be 8");
    }

    console.log(acc)

})