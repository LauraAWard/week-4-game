 
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var crystalArray = [crystal1, crystal2, crystal3, crystal4];
var randomNumber = 0;
var totalScore = 0;
var gameWins = 0;
var gameLosses = 0;
var minRandomNumber = 19;
var maxRandomNumber = 120;
var minCrystalValue = 1;
var maxCrystalValue = 12;

$(".btn").click(function() { addToScore($(this).value);})

  $.each(crystalArray, function(number, crystal){
      drinkDiv.append("<div>" + drink + "</div>")
    });


