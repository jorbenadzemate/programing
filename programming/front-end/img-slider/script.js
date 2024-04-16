const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");
const img = document.getElementById("img");

const imgs = [
    "front-end/img-slider/download (3).jpg",
    "front-end/img-slider/download (4).jpg",
    "front-end/img-slider/download (5).jpg"
];
let num = 0;

nextbtn.addEventListener("click", function() {
    num += 1;
    if(num >= imgs.length) {
        num = 0;
    }
    img.src = imgs[num];
});

prevbtn.addEventListener("click", function() {
    num -= 1;
    if(num < 0) {
        num = imgs.length - 1;
    }
    img.src = imgs[num];
});