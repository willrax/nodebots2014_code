var five = require("johnny-five");

five.Board().on("ready", function(){
  var tempSensor = new five.Sensor("A0");
  var piezo = new five.Piezo(6);
  var lcd = new five.LCD({
    pins: [12, 11, 5, 4, 3, 2],
    lines: 2,
  });
  lcd.useChar("cdot")

  this.loop(2000, function(){
    var value = tempSensor.value
    var cel = (((value * 0.004882814) - 0.5) * 100).toFixed(2);
    lcd.clear().cursor(0,0)
    lcd.print(cel + " :cdot:" + "C")

    if (cel > 26) {
      if (!piezo.isPlaying) {
        piezo.play({
          song: [
          ["E5", 1/4],
          [null, 1/4],
          ["E5", 1/4],
          [null, 3/4],
          ["E5", 1/4],
          [null, 3/4],
          ["C5", 1/4],
          [null, 1/4],
          ["E5", 1/4],
          [null, 3/4],
          ["G5", 1/4],
          [null, 7/4],
          ["G4", 1/4],
          [null, 7/4],
          ["C5", 1/4],
          [null, 5/4],
          ["G4", 1/4],
          [null, 5/4],
          ["E4", 1/4],
          [null, 5/4],
          ["A4", 1/4],
          [null, 1/4],
          ["B4", 1/4],
          [null, 3/4],
          ["A#4", 1/4],
          [null, 1/4],
          ["A4", 1/4],
          [null, 3/4],
          ["G4", 1/4],
          [null, 1/4],
          ["E5", 1/4],
          [null, 3/4],
          ["G5", 1/4],
          [null, 1/4],
          ["A5", 1/4],
          [null, 3/4],
          ["F5", 1/4],
          [null, 1/4],
          ["G5", 1/4],
          [null, 3/4],
          ["E5", 1/4],
          [null, 3/4],
          ["C5", 1/4],
          [null, 1/4],
          ["D5", 1/4],
          [null, 1/4],
          ["B4", 1/4],
          [null, 3/4]
            ],
          tempo: 215
        });
      };
    };
  });
});
