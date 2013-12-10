describe("TwentyFiveMinutes", function() {
  var twentyFiveMinutes;

  beforeEach(function() {
      twentyFiveMinutes = new TwentyFiveMinutes();
  });

    describe("should be able to set a complete time", function() {

        it("set complete time", function() {

            var expectedCompleteTime = 3000;
            twentyFiveMinutes.setCountDownTime(expectedCompleteTime);

            var actual = twentyFiveMinutes.getCountDownTime();
            expect(expectedCompleteTime).toEqual(actual);
        });
    });



    describe("should be able to just countdown to twenty five seconds", function() {

        it("should countdown by a second", function() {

            var expectedCompleteTime = 25000; //25 seconds
            twentyFiveMinutes.setCountDownTime(expectedCompleteTime);
            twentyFiveMinutes.startTimer();
            //twentyFiveMinutes.intervalComplete();
//            waitsFor(twentyFiveMinutes.intervalComplete)
//            {
//                expect(twentyFiveMinutes.getCountDownTime()).toBe('sdsd');
//            }


        });


    it("should start a timer", function() {

        expect(twentyFiveMinutes.justYo()).toEqual('yo');

    });

      it("should start at 0", function() {

        expect(twentyFiveMinutes.justYo()).toEqual('yo');

      });



      it("should count to twenty five seconds", function() {

        expect(twentyFiveMinutes.justYo()).toEqual('yo');

      });
    });

//  describe("when song has been paused", function() {
//    beforeEach(function() {
//      player.play(song);
//      player.pause();
//    });
//
//    it("should indicate that the song is currently paused", function() {
//      expect(player.isPlaying).toBeFalsy();
//
//      // demonstrates use of 'not' with a custom matcher
//      expect(player).not.toBePlaying(song);
//    });
//
//    it("should be possible to resume", function() {
//      player.resume();
//      expect(player.isPlaying).toBeTruthy();
//      expect(player.currentlyPlayingSong).toEqual(song);
//    });
//  });

//  // demonstrates use of spies to intercept and test method calls
//  it("tells the current song if the user has made it a favorite", function() {
//    spyOn(song, 'persistFavoriteStatus');
//
//    player.play(song);
//    player.makeFavorite();
//
//    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//  });
//
//  //demonstrates use of expected exceptions
//  describe("#resume", function() {
//    it("should throw an exception if song is already playing", function() {
//      player.play(song);
//
//      expect(function() {
//        player.resume();
//      }).toThrow("song is already playing");
//    });
//  });
});