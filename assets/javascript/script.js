// create all of your variables

// alert("JS !");

var minNum = "19"
var maxNum = "121"
var btnMin = "1"
var btnMax = "13"
var wins = 0
var loses = 0
var userScore = 0

// ======== From MDN :  to get a random number (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Using_Math.random())

// Use this fucntion to generatate all of the numbers.  This particular function will include both the minamum and maximum numbers.//

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRandomIntInclusive(1,3));

// console.log(random(121));
// console.log(random(13));


//=== Beginning of Game object litteral ===//

crystalsCollectorGame = {
    stones: ["#stone1", "#stone2", "#stone3", "#stone4"],

    start: startGame = (function () {
        // Set the random number using the function below //
        $("#randomNumber").text("Target Number " + getRandom(19, 120));

        //== set all the values then replace the numbers with images of the individual stones?
        for (i = 0; i < this.stones.length; i++) {
           stoneValueObject =  $(this.stones[i]).text(getRandom(1, 12))
           
            //=== Replace random numbers with stones (get help!) ===//
            
            console.log(stoneValueObject.i); 

            //===== set user score to 0 with variable =====//
            $("#totalScore").text(userScore);

            //=== Connection Confirmation ===//
            // console.log("startGamefunction is running! ");
        }
    }),

    numRange: function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    stone1: $("#stone1").click(function () {
        $("input:text").val(getRandomIntInclusive(1, 3));
    }),
}
//=== End of Object Littertal ===//


//========= Start the game here! ==========//
$("#startBtn").click(function () {
    //== create a function  in the object above that restarts the game with out refreshing the page and put it where the console.log is now.
    //console.log(crystalsCollectorGame.stones);
    crystalsCollectorGame.start();
});

//=== Crystal functionality ===//

$(".stones").click(function () {
    //=== add the random number to the total score
    console.log("i clicked a stone");
});