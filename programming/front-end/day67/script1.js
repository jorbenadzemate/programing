let seconds = 60;
let minutes = 5;
let timer;

function countTime() {
    seconds--;
    if (seconds === 0) {
        seconds = 60;
        minutes--;
        if (minutes === 0) {
            console.log("shutdown");
            clearInterval(timer); 
        }
    }
    // console.log(Minutes: ${minutes}, Seconds: ${seconds});
}

timer = setInterval(countTime, 1000);
