


$(document).ready(function() {

   // var $score = $('<div class="score">#score</div>');
   // $('.container').append($score);
   // var $heart = $('<div class="heart">Heart image</div>');
   // $('.container').append($heart);

//To hide the START statement before starting game****
 $('body').keypress(function(e){
    if(e.which == 13){
    console.log('it s working')
    $('.statement').hide()

  }
  beginGame()
 })

// var hidden = false;
// console.log("hidden = " + hidden);


//Displaying a start game with circletimer****


var beginGame = function(){
 // var $score = $('<div class="score">#score</div>');
 // $('.container').append($score);
 // var $heart = $('<div class="heart">Heart image</div>');
 // $('.container').append($heart);
 var $memorize = $('<div><h1 id="memorize">memorize</h1></div>');
 $('.container').append($memorize);
 var $randomNum = $('<div><h1 id="randomNum"></h1></div>');
 $('.container').append($randomNum);
 var $clockBox = $('<div class="clockBox"></div>');
 var $ready = $('<div id="clickReady">ready</di>');
 $('.container').append($ready)

 //ADD clocktimer****
 var $circleTimer = $('<div class="circleTimer"></div>');
 //$(clockBox).append($circleTimer);
 $('.container').append($circleTimer);


 addrandom()
 readyFunction()
 ready()


} //end of beginGame

//READY (Enter) to match game ****
function ready(){
  $('body').keypress(function(e){
  if(e.which == 13){
     $('#memorize').hide();
     $('.heart').hide()
  }

 })

}

//TIMER test****
 function readyFunction(){
    setTimeout(function(){
      $('#memorize').hide();
      console.log('it s working (2)')
      matchGame()
    }, 5000);

// i think maybe - container.hide happens after matchgame()
// so then it hides
// also it is a setINternval fucntion, so it happens every 3 seconds
// is that what it is supposed to do
  }



//the Match game page **** this is a match game where I can add random function
 function matchGame(){
   //$('.container').show();
   var $matchScreen = $('<div class="matchScreen"></div>');
   $('.container').append($matchScreen);
   var $score = $('<div class="score">#score</div>');
   $('.container').append($score);
   var $heart = $('<div class="heart">Heart image</div>');
   $('.container').append($heart);

}



// var beginGame = function(){
//    var $statement = $('<div class="statement"></div>')
//    var $h2 = $('<h2>This is a working memory capacity measurement game.</h2>')
//    var $h1 = $('<h1>START</h1>')
//    $('body').append($statement);
//    $($statement)append($h2);
//    $($statement)append($h1);
// }

// beginGame();


// var $start = $('.clockBox').text('START')
// $('container').append($start)

//Random Number for playing
// function randomNum(){
//   return Math.floor((Math.random() * 100) + 1);
// }

//$('#num').append(randomNum);

//FUNCTION : Displaying a random in right click
var addrandom = function(){
  var  randomNum = Math.floor((Math.random() * 100) + 1);
  $('#randomNum').text(randomNum);
  }





  // function readyFunction(){
  //   setInterval(function(){
  //      addrandom;
  //   }, 3000);
  // }

  // //Match text for starting playing
  // var $Match = $('#memorize').text('Match');
  // $('#memorize').append($Match)

  //Hide the heart symbol
  //$('.heart').hide()

  //Hide the Score Num
  //$('.score').hide()

  // var $Match = $('#memorize').text('Match');
  // $('#memorize').append($Match)






// the function for left and right keyboard
 $('body').keydown(function(e){
    if((e.keyCode || e.which)  == 37){
      addrandom()


    }
    if((e.keyCode || e.which) == 39){
      alert('you got left press!');
    }
  })



  });
