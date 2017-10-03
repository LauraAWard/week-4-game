$(window).on( "load", function() { 


/*var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;*/
var crystalArray = [];
var randomNumber = 0;
var totalScore = 0;
var gameWins = 0;
var gameLosses = 0;
var minRandomNumber = 19;
var maxRandomNumber = 120;
var minCrystalValue = 1;
var maxCrystalValue = 12;
var gameOver = false;


function crystal(id, src) {

	this.crystalID = id;
	this.imgSrc = src;
	this.crystalValue = (Math.floor(Math.random() * (maxCrystalValue - minCrystalValue)) + minCrystalValue);
	this.getID = function() {
		return this.crystalID;
	};
	this.getSrc = function() {
		return this.imgSrc;
	};
	this.getvalue = function() {
		return this.crystalValue;
	};
	this.resetValue = function() {
		this.crystalValue = (Math.floor(Math.random() * (maxCrystalValue - minCrystalValue)) + minCrystalValue);
		return this.crystalValue;
	};
};

function createCrystalArray() {

	 var crystal1 = new crystal("crystal-1", "assets/images/amethyst.jpg");
	 var crystal2 = new crystal("crystal-2", "assets/images/yellow.jpg");
	 var crystal3 = new crystal("crystal-3", "assets/images/green.jpg");
	 var crystal4 = new crystal("crystal-4", "assets/images/purple.jpg");
	 crystalArray.push(crystal1, crystal2, crystal3, crystal4);
};

function displayCrystals() {
   	var crystalDiv = $("#crystalBtns");
 
  	$.each(crystalArray, function(number, crystal){
  	crystalDiv.append("<div><button type='button' class='btn' id=" + this.getID() + " value=" + this.getvalue() + "><img src=" + this.getSrc() + "></button></div>");

  	 });
 };

 function setRandomNumber() {
 	randomNumber = (Math.floor(Math.random() * (maxRandomNumber - minRandomNumber)) + minRandomNumber);
 	$("#randomNumber").html(randomNumber);
 };

function addToScore(value) {
	totalScore += parseInt(value);
	console.log(totalScore);
	$("#totalScore").html(totalScore);
	compareNumbers();
};

function resetScore() {
	totalScore = 0;
	$("#totalScore").html(totalScore);
};


function compareNumbers() {
	
	gameOver = false;

	if (totalScore > randomNumber) {
		gameLosses++;
		gameOver = true;
		$("#lossCnt").html(gameLosses);
		resetGame();
	}
	else if (totalScore === randomNumber) {
		gameWins++;
		gameOver = true;
		$("#winCnt").html(gameWins);
		resetGame();
	}
};

function resetCrystalValues() {
	$.each(crystalArray, function(number, crystal) {
		var tempValue = this.resetValue();
		console.log(tempValue);
		$("#" + this.getID()).attr("value", tempValue);
	});

};

function startGame() {
	createCrystalArray();
	displayCrystals();
	setRandomNumber();
};

function resetGame() {
	resetCrystalValues();
	setRandomNumber();
	resetScore();
};

	startGame();

	if (gameOver === true) {
		resetGame();
	}

	$(".btn").click(function() { addToScore($(this).attr("value"));})


	

















});