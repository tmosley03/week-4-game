// create all of your variables

// alert("JS !");

// ======== From MDN :  to get a random number (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Using_Math.random())

// Use this GLOBAL fucntion to generatate all of the numbers.  This particular function will include both the minamum and maximum numbers.//

//================================================ GLOBAL ===================================================//

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create a function that cheks the score against the target number with every click of a stone.

function scoreKeeper() {
    if (currentScore === targetNumber) {
        $("#wins").text(wins++);
        alert("YOU WIN!!!!!  " +" Your Number is: " + currentScore);
        startGame();
    }
    else if (currentScore > targetNumber+1) {
        $("#losses").text(losses++);
        alert("You have exceeded the target number.  :-(   Please try again. " + " Your Number is: " + currentScore);
        startGame();
    }
}

var userScore = 0
var currentScore = 0
var wins = 0
var losses = 0

var stoneOneValue = getRandom(1, 12);
var stoneTwoValue = getRandom(1, 12);
var stoneThreeValue = getRandom(1, 12);
var stoneFourValue = getRandom(1, 12);
var targetNumber = getRandom(19, 120);
// console.log("targetNumber from global "+ targetNumber)
// console.log("stonevalue from global: "+stoneOneValue, stoneTwoValue, stoneThreeValue, stoneFourValue)

//=============== Beginning of Game object litteral =============================//
crystalsCollectorGame = {
    //========== Start the Game ===============//
    start: startGame = (function () {
        currentScore = 0;
        runningTotal = 0;
        // Set the target number to a random number between 19-120 //
        targetNumber = getRandom(19,120);
        console.log("targetNumber from startGame function: " + targetNumber);
        $("#randomNumber").text("Target Number " + targetNumber);
        console.log("targetNumber from startGame function: " + targetNumber);
        // Create a variable for each button and give it a random value between 1-12 //
        // How do I access these variables outside of this function and object?
        stoneOneValue = getRandom(1, 12);
        stoneTwoValue = getRandom(1, 12);
        stoneThreeValue = getRandom(1, 12);
        stoneFourValue = getRandom(1, 12);
        console.log(" stoneOneValue from the startGame function: " + stoneOneValue);
        console.log(" stoneTwoValue from the startGame fucntion: " + stoneTwoValue);
        console.log(" stoneThreeValue from the startGame fucntion: " + stoneThreeValue);
        console.log(" stoneFourValue from the startGame fucntion: " + stoneFourValue);
        //===== set score, wins, losses to 0 with global variable =====//
        $("#totalScore").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }),
}
//============================= End of Object Littertal ===========================//


//========= Startbutton ==========//
$("#startBtn").click(function () {
    crystalsCollectorGame.start();
    $("#startBtn").text("Reset Game");
});

//============================= Crystal Button Object Litteral ===========================//
//==the crystal buttons are in a new object (multidimensional object)
// crystalButtons = {
//     stone1: $("#stone1").click(function () {
//         currentScore = stoneOneValue + userScore;
//         console.log(currentScore);
//     })
// }

//=== Assign numbers to buttons individually.
// is there a way to check the current value of a variable before executing math?
$("#stone1").click(function () {
    currentScore = currentScore + stoneOneValue;
    $("#totalScore").text(currentScore);
    scoreKeeper();
    // console.log("currentScore from stone one:  " + currentScore);
    // console.log("stoneValue from button click "+stoneOneValue);
});

$("#stone2").click(function () {
    currentScore = currentScore + stoneTwoValue;
    $("#totalScore").text(currentScore);
    scoreKeeper();
    // console.log("currentScore from stone two:  " + currentScore);
    // console.log("stoneValue from button click "+stoneTwoValue);
});

$("#stone3").click(function () {
    currentScore = currentScore + stoneThreeValue;
    $("#totalScore").text(currentScore);
    scoreKeeper();
    // console.log("currentScore from stone three:  " + currentScore);
    // console.log("stoneValue from button click "+ stoneThreeValue);
});

$("#stone4").click(function () {
    currentScore = currentScore + stoneFourValue;
    $("#totalScore").text(currentScore);
    scoreKeeper();
    // console.log("currentScore from stone three:  " + currentScore);
    // console.log("stoneValue from button click "+ stoneFourValue);
});

//========================= Add stone value to user score =============//



//========================= Win or Lose Conditions ===================//


