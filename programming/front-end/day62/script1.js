const me = {
    name:"mate",
    surname:"jorbenadze",
    age:13,
    favouriteColor:"black",
}
let prop=document.getElementById("inp")
let btn=document.getElementById("btn")
 

btn.addEventListener("click",function(){
    if (prop.value===me){
        alert()
    }
})


