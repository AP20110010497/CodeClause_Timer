let timerMins=0;
let timerSecs=0;
let timerTens=0;
let timerInterval;
const timer=document.querySelector('.timer');
const timerMinutes=document.querySelector('.timer-minutes');
const timerSeconds=document.querySelector('.timer-seconds');
const timerStartBtn=document.querySelector('.cir1 .btn-start');
const timerStopBtn=document.querySelector('.cir1 .btn-stop');
const timerResetBtn=document.querySelector('.cir1 .btn-reset');

function startTimer() 
{
    clearInterval(timerInterval);
    timerMins=parseInt(timerMinutes.value);
    timerSecs=parseInt(timerSeconds.value);
    timerInterval=setInterval(() => 
    {
        timerTens--;
        if (timerTens<0) 
        {
            timerSecs--;
            timerTens=99;
        }
        if (timerSecs<0) 
        {
            timerMins--;
            timerSecs=59;
        }
        if (timerMins<0) 
        {
            clearInterval(timerInterval);
            timer.innerHTML=`00:00:00`;
            return;
        }
        timer.innerHTML=`${timerMins.toString().padStart(2, '0')}:${timerSecs.toString().padStart(2, '0')}:${timerTens.toString().padStart(2, '0')}`;
    }, 10);
}
timerStartBtn.addEventListener('click', () => 
{
    startTimer();
});
timerStopBtn.addEventListener('click', () => 
{
    clearInterval(timerInterval);
});
timerResetBtn.addEventListener('click', () => 
{
    clearInterval(timerInterval);
    timerMinutes.value='';
    timerSeconds.value='';
    timer.innerHTML=`00:00:00`;
});