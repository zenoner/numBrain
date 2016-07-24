


$(document).ready(function() {
//Test for empty array
var arr = []
var selectNum = 0
//Random Num
var addrandom = function(){

    var randomNum = arr.push(Math.floor((Math.random() * 100) + 1));
    selectNum = arr[0]
    console.log(selectNum) //test
    //$('#randomNum').text(selectNum);
}

//test loop random num
var arrRandom = []
var randomNum = function (){
  for (var i=0; i<10; i++){
    arrRandom.push(Math.floor((Math.random() * 100) + 1));
  }
  arrRandom.toString();
  console.log(arrRandom);
  console.log(arrRandom[0]);
  $('#randomNum').text(arrRandom[0]); //test
}



//To hide the START statement before starting game****
//e.which = 13 is the press ENTER
var counter = 0;
 $('body').keypress(function(e){
    if (counter < 1) {
      if(e.which == 13){
        console.log('it s working')
        $('.statement').hide()
      }
      beginGame();

    }
    counter++;
 })


  //  $('h1').click(function(){
  //   beginGame()
  //   console.log('it s working')
  //   $('.statement').hide()
  // });


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
 randomNum()
 keyDown()


} //end of beginGame

//READY (Enter) to match game ****
var clicked = false;
//change this name of function..its too confusing. maybe like loading time
//when you can, change it
function ready(){
  $('body').keypress(function(e){
  if(e.which == 13){
     $('#memorize').hide();
     // $('.heart').hide()
     // clicked = true;
     matchGame()

  }
     stopTimeout()
 })

} //end of ready



//TIMER test****
 function readyFunction(){
    setTimeout(function(){
      if (clicked == false) {
        $('#memorize').hide();
        console.log('timer in 5 seconds')
        $('#randomNum').text(arrRandom[0] + ' here is start game');
        matchGame()
      }
      clicked = false;
    }, 5000); //ends set timeout

  //    $('body').keydown(function(e){
  //   if((e.keyCode || e.which)  == 37){
  //     console.log('yes press')
  //     compare()
  //     // addrandom()
  //   }
  //   if((e.keyCode || e.which) == 39){
  //     console.log('no press')
  //     // compare()
  //   }
  // })
} //end of readyFunction



//the Match game page **** this is a match game where I can add random function
 function matchGame(){
   //$('.container').show();
   var $matchScreen = $('<div class="matchScreen"></div>');
   $('.container').append($matchScreen);
   var $score = $('<div id="score"></div>');
   $('.container').prepend($score);
   var $heart = $('<div id="heart">Heart image</div>');
   $('.container').prepend($heart);

}



//FUNCTION : Displaying a random in right click
// var addrandom = function(){
//   var  randomNum = Math.floor((Math.random() * 100) + 1);
//   $('#randomNum').text(randomNum);
//   }


// the function for left and right keyboard

var keyDown = function(){
    $('body').keydown(function(e){
    if((e.keyCode || e.which)  == 37){
      console.log('yes press')
      compare()
      // addrandom()
    }
    if((e.keyCode || e.which) == 39){
      console.log('no press')
      // compare()
    }
  })
} // end of keyDown



var score = 0;

 function compare(){
  var randomNum = $('#randomNum').text()
  if (arrRandom[0] == arrRandom[0]){
    alert('you got it(2)')
    //console.log('they are the same.')
    //if you said yes, you win, add point to score
    score+= 1;
    console.log(score)
    $('#score').text(score)
    //if you said no, you lose

  }else{
    console.log('different')
    //if you said no, you win, add point to score
    //if you said yes, you lose
  }
 }







  });
