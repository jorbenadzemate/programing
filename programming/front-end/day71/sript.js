let form=document.getElementsById("form")
let btn=document.getElementById("btn")


let parentDiv=document.createElement("div")

btn.addEventListener("submit",function(e){
    e.preventDefault();
    const paragraf=document.createElement("p")
    const txt=document.createTextNode(form.name.value)
    const txt2=document.createTextNode(form.surname.value)
    
    
    paragraf.appendChild(txt,txt2)
    parentDiv.appendChild(paragraf)
})