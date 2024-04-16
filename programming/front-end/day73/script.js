const child = document.getElementById("child-container");

let position = 0
let y=0;
let direction =0
const moveRight = setInterval(function(){
    child.style.left = position + "px";
    position++;
    if(position==300){
        child.style.bottom=y + "px"  
        y++
        
    }
    else if(y== 300,300){
        child.style.right=direction + "px"
        direction++
        clearInterval(moveRight)
    }
   
}, 10)