function createAndLogDate() {
    const date = new Date();
    console.log(date.toString());
  }
  
  
  setInterval(createAndLogDate, 1000);
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  
  function updateTime() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    // console.log(Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds});
  }
  
  
  setInterval(updateTime, 1000);



