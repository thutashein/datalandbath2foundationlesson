// Game Value
let min = 1,
 max = 10,
 winningnum = getrandomnum(min,max),
 guessesleft = 3;


//UI
 const game = document.querySelector('#game'),
   minnum = document.querySelector('.minnum'),
   maxnum = document.querySelector('.maxnum'),
   gessinput = document.querySelector('#guessinput'),
   gessbtn = document.querySelector('#guessbtn'),
   message = document.querySelector('.message');


minnum.textContent = min;
maxnum.textContent = max;


guessbtn.addEventListener('click',function(){
 // console.log(guessinput.value);

 let guess = parseInt(guessinput.value);
 // console.log(guess);
 // console.log(typeof guess);

 if(isNaN(guess) || guess < min || guess > max){
  // console.log(`Please enter a number between ${min} and ${max}`);
  setmessage(`Please enter a number between ${min} and ${max}`,'red');
 }
////////////////////////////////////////////////////////////////////////////

 if(guess === winningnum){
  // Gameover WON

  // // disabled input
  // guessinput.disabled = true;
  // // border color
  // guessinput.style.borderColor = "green";
  // // message
  // setmessage(`${winningnum} is correct ! , You Win `,'green');

  gameover(true,`${winningnum} is correct!, You Won`);


 }else{
  // Wrong Number

  guessesleft -= 1;

  if(guessesleft === 0){
   // Gameover lost

   // // disabled input
   // guessinput.disabled = true;
   // // border color
   // guessinput.style.borderColor = "red";
   // // message
   // setmessage(`Game Over, You lost , The correct number was ${winningnum} `,'red');


   gameover(false,`Game Over, You lost , The correct number was ${winningnum}`);



  }else{
  // Game continues 

   // border color
   guessinput.style.borderColor = "red";

   // clear input
   guessinput.value= '';

   // message
   setmessage(`${guess} is not correct , ${guessesleft} guesses left `,'red');

  }

 }



});



// Message
function setmessage(msg,color){
 message.textContent = msg;
 message.style.color = color;
}


function setmessage2(msg,color){
  message2.textContent=msg;
  message2.style.color=color;


  setTimeout(function(){
    message2.textContent="";

  },1000);
}








//Game Over
function gameover(won,msg){
 let color;

 won === true ? color = 'green' : color = 'red';

 // disabled
 guessinput.disabled = true;
 // borderColor
 guessinput.style.borderColor = color;
 //set message color
 message.style.color = color;

 //setmessage
 setmessage(msg);

 // Play Again ?
 guessbtn.value = 'Play Again';


 // Add Class
 guessbtn.classList.add('play-again');

}


//Play Again
game.addEventListener('mouseup',function(e){
 // console.log(e.target);
 if(e.target.className === 'play-again'){
  window.location.reload();
 }
});

// For Winning Number

function getrandomnum(min,max){
        // 10-1+1
 // console.log(Math.floor(Math.random()*(max-min+1)+min));
 const rdmnumber = Math.floor(Math.random()*(max-min+1)+min);
 return rdmnumber;
}

console.log(guessbtn)