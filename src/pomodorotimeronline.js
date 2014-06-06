var pto = {};

pto.TWENTY_FIVE_MINUTES = 1500000;
pto.countdown = pto.TWENTY_FIVE_MINUTES;
pto.countdownCompleteTime = pto.TWENTY_FIVE_MINUTES;
pto.date;
pto.timer;
pto.timerRunning = false;

pto.intervalComplete = function(){
    if(0 < pto.countdown){
        pto.timerStep();
    }else{
        pto.timerComplete();
    }
};

pto.timerStep = function(){
    pto.countdown -= 1000;
    $('.timer-display').text(pto.milliSecondsToTimeFormat(pto.countdown));
};

pto.timerComplete = function(){
    clearInterval(pto.timer);
    var taskName = $('.task').val();
    $('.task-container').append('<p>'+taskName+'</p>')
};

pto.start = function(){
    if(!pto.timerRunning){
        pto.timer = setInterval(function(){
            pto.intervalComplete();
        }, 1000);
        pto.timerRunning = true;
    }
};

pto.pause = function(){
    clearInterval(pto.timer);
    pto.timerRunning = false;
};

pto.reset = function(){
    pto.countdown = pto.countdownCompleteTime;
    $('.timer-display').text(pto.milliSecondsToTimeFormat(pto.countdown));
    clearInterval(pto.timer);
    pto.timerRunning = false;
};

pto.setTimerDuration = function(time){
    pto.countdown = time;
    pto.countdownCompleteTime = time;
    clearInterval(pto.timer);
    pto.timerRunning = false;
    $('.timer-display').text(pto.milliSecondsToTimeFormat(pto.countdown));
};

pto.milliSecondsToTimeFormat = function(miliseconds){
    pto.date = new Date(miliseconds);
    return pto.convertToDoubleDigit(pto.date.getMinutes())+':'+pto.convertToDoubleDigit(pto.date.getSeconds());
};

pto.convertToDoubleDigit = function(value){
    if(value.toString().length < 2){
        value='0'+value;
    }
    return value.toString();
};



