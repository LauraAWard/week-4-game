$(window).on( "load", function() { 

var imgArray = [
	"assets/images/amethyst.jpg",
	"assets/images/yellow.jpg",
	"assets/images/green.jpg",
	"assets/images/purple.jpg"];
var gemCount = 4;
var idRoot = "crystal-";
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
	this.crystalValue = (Math.floor(Math.random() * (maxCrystalValue)) + minCrystalValue);
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
		this.crystalValue = (Math.floor(Math.random() * (maxCrystalValue)) + minCrystalValue);
		return this.crystalValue;
	};
};

function createCrystalArray() {
	
	var indexCnt, idCnt;
	
	for (indexCnt = 0, idCnt = (indexCnt + 1); indexCnt < gemCount; indexCnt++, idCnt++) {
		var tempID = (idRoot + idCnt);
		var tempImg = imgArray[indexCnt];
		crystalArray[indexCnt] = new crystal(tempID, tempImg);
	}
};

function displayCrystals() {
   	
   	var crystalDiv = $("#crystalBtns");
 
  	$.each(crystalArray, function(number, crystal){
  		crystalDiv.append("<div col-md-3><button type='button' class='btn' id=" + this.getID() + 
  		" value=" + this.getvalue() + "><img src=" + this.getSrc() + "></button></div>");
  	 });
 };

 function setRandomNumber() {
 	
 	randomNumber = (Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1)) + minRandomNumber);
 	$("#randomNumber").html(randomNumber);
 };

function addToScore(value) {
	
	totalScore += parseInt(value);
	$("#totalScore").html(totalScore);
	compareNumbers();
};

function resetScore() {
	
	totalScore = 0;
	$("#totalScore").html(totalScore);
};


function compareNumbers() {
	
	if (totalScore > randomNumber) {
		gameLost();
	}
	else if (totalScore === randomNumber) {
		gameWon();
	}
};

function gameLost() {
	gameLosses++;
	gameOver = true;
	$("#lossCnt").html(gameLosses);
	resetGame();
};

function gameWon() {
	gameWins++;
	gameOver = true;
	$("#winCnt").html(gameWins);
	resetGame();
};

function resetCrystalValues() {
	
	$.each(crystalArray, function(number, crystal) {
		var tempValue = this.resetValue();
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
	gameOver = false;
};

	startGame();

	$(".btn").click(function() { addToScore($(this).attr("value"));})

	if (gameOver === true) {
		resetGame();
	}

});