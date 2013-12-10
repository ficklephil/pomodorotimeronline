var TWENTY_FIVE_MINUTES = 1500000;
var countdown = TWENTY_FIVE_MINUTES;
var countdownCompleteTime = TWENTY_FIVE_MINUTES;
var date;
var timer;
var timerRunning = false;

var intervalComplete = function(){
    if(0 < countdown){
        timerStep();
    }else{
        timerComplete();
    }
}

var timerStep = function(){
    countdown -= 1000;
    $('.timer-display').text(milliSecondsToTimeFormat(countdown));
}

var timerComplete = function(){
    clearInterval(timer);
    var taskName = $('.task').val();
    $('.task-container').append('<p>'+taskName+'</p>')
}

var start = function(){
    if(!timerRunning){
        timer = setInterval(function(){
            intervalComplete();
        }, 1000);
        timerRunning = true;
    }
}

var pause = function(){
    clearInterval(timer);
    timerRunning = false;
}

var reset = function(){
    countdown = countdownCompleteTime;
    $('.timer-display').text(milliSecondsToTimeFormat(countdown));
    clearInterval(timer);
    timerRunning = false;
}

var setTimerDuration = function(time){
    countdown = time;
    countdownCompleteTime = time;
    clearInterval(timer);
    timerRunning = false;
    $('.timer-display').text(milliSecondsToTimeFormat(countdown));
}

var milliSecondsToTimeFormat = function(miliseconds){
    date = new Date(miliseconds);
    return convertToDoubleDigit(date.getMinutes())+':'+convertToDoubleDigit(date.getSeconds());
}

var convertToDoubleDigit = function(value){
    if(value.toString().length < 2){
        value='0'+value;
    }
    return value.toString();
}



