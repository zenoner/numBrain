$(document).ready(function() {
//Testing for empty recordNumbersay
//Variable groups
  var recordNumbers = [] //Random numbers to memorize
  var gameRound = [] //Generating Random numbers
  var selectNum ;
  var round = 0; //this is our index for gameRound
  var score = 0; //Starting 0 for score
  var heart = 3; //Three hearts life  give a chance when you get wrong number

//Recording a random numbers to memorize
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



//Displaying a start game with circletimer(not including)****
//Beginning game to memorize the numbers
var beginGame = function(){
   var $memorize = $('<div><h1 id="memorize">memorize</h1></div>');
   $('.container').append($memorize);
   var $randomNum = $('<div><h1 id="randomNum"></h1></div>');
   $('.container').append($randomNum); //this is where gameloop can do that job
   //$('#randomNum').text(selectNum); //look at this. seletNum is blank at the moment
   var $clockBox = $('<div class="clockBox"></div>');
   var $ready = $('<div id="clickReady"></di>');
   $('.container').append($ready)
   //ADD clocktimer****
   var $circleTimer = $('<div class="circleTimer"></div>');
   //$(clockBox).append($circleTimer);
   $('.container').append($circleTimer);
//This is where the game start by calling function, loopGame()
   loopGame()
   //////
  } //end of beginGame

  var loopGame = function(){
    addrandom() //we generated the numbers the user need to remmebr
    gameRound = generatedNumbers() //we generate random 20 numbers
    gameRound = correctAndWrong() //this is outputting, but nothing is being stored. how can wefix it?
    readyFunction() //10 secound timer before game
    ready() //Press Enter before game
    // keyDown()

  }


//READY (by pressing ENTER) to match game ****
//e.which = 13 is the press ENTER
  var clicked = false;
  function ready(){
    $('body').keypress(function(e){
    if(e.which == 13){
      $('#memorize').hide();
      //  $('.heart').hide()
       clicked = true;
       setUpInterface() //HTML user interface
       matchGame()

    }
   })
  }

//READY (by using setTimeout() in 10 sec)
  function readyFunction(){
    setTimeout(function(){ //wait for 5 seconds for user to remember the number
      if (clicked === false) {
        $('#memorize').hide();
        console.log('timer in 10 seconds')
        setUpInterface()
        matchGame()

      }
      clicked = false;
    }, 10000); //ends set timeout
  }


//the Match game page ****
//this is a match game where I can add random function
  function matchGame(){
  var $firstRound = gameRound[round]
  console.log(round, 'this is round')
  console.log(gameRound, 'this is gameRound')
  $('#randomNum').text($firstRound);
  }

//The interface(HTML) of the game
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

////The includes() method determines whether an array includes a certain element,
//returning true or false
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
// correctAndWrong () to combine two arrays, recordNumber and gameRound and random  it
var correctAndWrong = function(){
  //This borrowed from the website, stackoverflow.com
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
//e.which = 37 is the press left
//e.which = 39 is the press right
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

//to compare
  function compare(userInput){
    console.log(userInput) //this is a user's guess
    //true = 'I think it is yes'
    //false = 'I think it is no'
    if(recordNumbers.includes(gameRound[round]) == userInput){ //if use gets right answer, user gain score
      score += 1; //score gains
      console.log(score)
      $('#score').text(score)
      console.log('correct')
    } else { //if user gets wrong answer, user lose heart and score
      heart -= 1; //decreased heart
      score -= 1; //decreased score
      console.log('wrong')
      console.log('I have heart:', heart)
      console.log(score)
      $('#score').text(score)
      $('#heart').text(heart);
    }

    if(heart<=0){ //check if it is game over yet
      alert('GAME OVER!! Your level score is ' + score);
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

}); //end of jQuery






