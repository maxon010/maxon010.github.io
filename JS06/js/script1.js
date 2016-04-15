var ms = 0;
var flag = false;

var btnStart = document.getElementById('ssbutton');
btnStart.addEventListener('click', startpause);

var btnReset = document.getElementById('reset');
btnReset.addEventListener('click', swreset);

var secCount = 0;
var minCount = 0;
var hourCount = 0;

document.body.onload = display();

function printCount(i){
    document.timer.time.value = (i % 1000);
        
        secCount = (Math.floor(i / 1000) % 60);
        if (secCount<10) {
            document.timer.sec.value = '0'+ secCount;
        } else {
             document.timer.sec.value = secCount; 
        }
        
        minCount = (Math.floor(i / 60000) % 60);
        if (minCount<10) {
            document.timer.min.value = '0'+ minCount;
        } else {
            document.timer.min.value = minCount;
        }
        
        hourCount = (Math.floor(i / 3600000) % 24);
        if (hourCount<10){
            document.timer.hours.value = '0'+ hourCount;
        } else {
            document.timer.hours.value = hourCount;
        }
}

function startpause() {
    if (!flag) {
        // Нажатие Старт
        flag = true;
        then = new Date();//текущая дата в момент старта
        then.setTime(then.getTime() - ms);
        document.timer.ssbutton.value = 'Pause';
    } else {
        //Нажатие Pause    
        flag = false;
        now = new Date();
        ms = now.getTime() - then.getTime();
        printCount(ms);
        document.timer.ssbutton.value = 'Start';
       }
}

function swreset() {
    flag = false;
    ms = 0;
    document.timer.time.value = '0' + ms;
    document.timer.sec.value = '0' + ms;
    document.timer.min.value = '0' + ms;
    document.timer.hours.value = '0' + ms;
    document.timer.ssbutton.value = 'Start';
}
function display() {
    setTimeout("display();", 100);
    if (flag)  {
        now = new Date();
        ms = now.getTime() - then.getTime();
        printCount(ms);
       }
}
