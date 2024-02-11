let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
 
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
 
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
 
stopBtn.addEventListener('click', function () {
    timer = false;
});
 
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
 
function stopWatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour.toString().padStart(2, '0');
        let minString = minute.toString().padStart(2, '0');
        let secString = second.toString().padStart(2, '0');
        let countString = count.toString().padStart(2, '0');
 
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
 
        setTimeout(stopWatch, 10);
    }
}
