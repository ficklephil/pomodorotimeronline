/**
 * Created with JetBrains WebStorm.
 * User: Philip
 * Date: 31/10/13
 * Time: 20:36
 * To change this template use File | Settings | File Templates.
 */
function TwentyFiveMinutes() {
    this.A_SECOND = 1000;
    this.currentCountDownTime;
    this.counter;
}

TwentyFiveMinutes.prototype.justYo = function() {
    // something complicated
    //throw new Error("not yet implemented");
    return 'yo';
};

TwentyFiveMinutes.prototype.startTimer = function() {
    console.log('start timer' + this.A_SECOND );
    this.counter=setInterval(function(){TwentyFiveMinutes.prototype.intervalComplete();}, 1000);
};

TwentyFiveMinutes.prototype.hasTimerStarted = function() {
    console.log('start timer');
   // this.counter=setInterval(this.intervalComplete, 1000);
};

TwentyFiveMinutes.prototype.intervalComplete = function() {
//    console.log('interval complete' + this.currentCountDownTime );



    //this.justATest();
    //return 'hello';
    // something complicated
    //throw new Error("not yet implemented");
//    return 'yo';

    //so when it hits this it should change to the current second it's on
//    this.currentCountDownTime = this.A_SECOND;
    //console.log('this.currentCountDownTime : ' + this.A_SECOND );
    //dispatch timer complete
//    var secondCompleteEvent = new Event('secondComplete');
//    this.dispatchEvent(secondCompleteEvent);
   // return true;
};

TwentyFiveMinutes.prototype.justATest = function() {
    console.log('justATest' + this.currentCountDownTime );
};




TwentyFiveMinutes.prototype.setCountDownTime = function(value) {
    this.currentCountDownTime=value;
};

TwentyFiveMinutes.prototype.getCountDownTime = function() {
    console.log('this.currentCountDownTime' + this.currentCountDownTime);
     return this.currentCountDownTime;
};