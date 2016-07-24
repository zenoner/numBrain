$(document).ready(function() {
//Test for empty recordNumbersay
  var recordNumbers = []
  var gameRound = []
  var selectNum ;
  var round = 0; //this is our index for gameRound
  var score = 0;
  var heart = 3;
  //Random Num
  var addrandom = function(){
    recordNumbers.push(Math.floor((Math.random() * 100) + 1));
    console.log(recordNumbers);
    $('#randomNum').text(recordNumbers); //Like here, why dont we do just do that?
  }


//To hide the START statement before starting game****
//e.which = 13 is the press ENTER
  var counter = 0;
  $('body').keypress(function(e){
    if (counter < 1) {
      if(e.which === 13){
        console.log('it s working')
        $('.statement').hide()
      }
      beginGame(); //after user press Enter in the beggining
    }
    counter++;
  })



//Displaying a start game with circletimer****
var beginGame = function(){
  ////
   var $memorize = $('<div><h1 id="memorize">memorize</h1></div>');
   $('.container').append($memorize);
   var $randomNum = $('<div><h1 id="randomNum"></h1></div>');
   $('.container').append($randomNum); //this is where gameloop can do that job
   //$('#randomNum').text(selectNum); //look at this. seletNum is blank at the moment
   var $clockBox = $('<div class="clockBox"></div>');
   var $ready = $('<div id="clickReady">ready</di>');
   $('.container').append($ready)
   //ADD clocktimer****
   var $circleTimer = $('<div class="circleTimer"></div>');
   //$(clockBox).append($circleTimer);
   $('.container').append($circleTimer);
   ////

   //in my code, I put a game loop. this where the game starts
   //upDateTime() //Tried to add the sec clock
   loopGame()
   //////
  } //end of beginGame

  var loopGame = function(){
    addrandom() //we generated the numbers the user need to remmebr
    gameRound = generatedNumbers() //we generate random 20 numbers
    gameRound = correctAndWrong() //this is outputting, but nothing is being stored. how can wefix it?
    readyFunction()
    ready()
    // keyDown()

  }





//READY (Enter) to match game ****
  var clicked = false;
  function ready(){
    $('body').keypress(function(e){
    if(e.which == 13){
      $('#memorize').hide();
      //  $('.heart').hide()
       clicked = true;
       setUpInterface()
       matchGame()
    }
   })
  }

  //TIMER test****
  function readyFunction(){
    setTimeout(function(){ //wait for 5 seconds for user to remember the number
      if (clicked === false) {
        $('#memorize').hide();
        console.log('timer in 5 seconds')
        setUpInterface()
        matchGame()
      }
      clicked = false;
    }, 5000); //ends set timeout
  }



//the Match game page **** this is a match game where I can add random function
  function matchGame(){
  var $firstRound = gameRound[round]
  console.log(round, 'this is round')
  console.log(gameRound, 'this is gameRound')
  $('#randomNum').text($firstRound);
  }

var setUpInterface = function(){
  //$('.container').show();
    $('.matchScreen').remove();
    $('#score').remove();
    $('#heart').remove();

    var $matchScreen = $('<div class="matchScreen"></div>');
    $('.container').append($matchScreen);
    var $score = $('<div id="score"></div>');
    $('.container').prepend($score);
    $('#score').text(score)
    var $heart = $('<div id="heart"></div>');
    $('.container').prepend($heart);
    $('#heart').text(heart);
}

var generatedNumbers = function(){
  var lengthOfRecordNumber =  recordNumbers.length
  var wrongNumbers = [];
  // console.log(lengthOfRecordNumber) //
  for (var i=0; i<lengthOfRecordNumber + 2; i++){
    var extraNumbers = (Math.floor((Math.random() * 100) + 1));
    //this is for making sure numbers are not same in recordNumbers
    //before pushing into wrongNumbers
    if (recordNumbers.includes(extraNumbers)==false){
        wrongNumbers.push(extraNumbers);
    }
  }
  return wrongNumbers
}
// to combine two arrays and random  it
  var correctAndWrong = function(){
    //from website source
    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

//
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

      return array;
    }
    var combineTwoArrays = recordNumbers.concat(gameRound);
    return shuffle(combineTwoArrays);
    } // end of correctAndWrong




// the function for left and right keyboard
  // var keyDown = function(){
    $('body').keydown(function(e){
    if((e.keyCode || e.which)  == 37){
      // console.log('yes press')
      compare(true)
      // addrandom()
    }
    if((e.keyCode || e.which) == 39){
      // console.log('no press')
      compare(false)
    }
    })
  // } // end of keyDown


  function compare(userInput){
    console.log(userInput) //this is user's guess
    //true = 'I think it is yes'
    //false = 'I think it is no'
    if(recordNumbers.includes(gameRound[round]) == userInput){ //if use gets right answer, user gain score
      score += 1;
      console.log(score)
      $('#score').text(score)
      console.log('correct')
    } else { //if user gets wrong answer, user lose heart and score
      heart -= 1;
      score -= 1;
      console.log('wrong')
      console.log('I have heart:', heart)
      console.log(score)
      $('#score').text(score)
      $('#heart').text(heart);
    }

    if(heart<=0){ //check if it is game over yet
      alert('GAME OVER');
    }

    if(round === gameRound.length-1){
     //$('.container').append($memorize);
      console.log("New LEVEL")
      round = 0; //reset
      loopGame()
    } else{
      //next round
      round ++
      matchGame()
    }

  }


//////
// var time = new Date().getTime();
// var timeDown = 10;

// function upDateTime(){
//   var cTime = new Date().getTime();
//   var diff = cTime - time;
//   var seconds = timeDown - Math.floor(diff/1000);
//   if (seconds>=0){
//     $('.circletimer').text(seconds<10 ? "0" + seconds:seconds);
//   }
// }
//upDateTime();
//ar counter = setInterval(upDateTime,500);


}); //end of jQuery






