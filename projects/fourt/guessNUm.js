
let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const form = document.querySelector('form')

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi  = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement("p");
// console.log(p)
let prvGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){ 
    form.addEventListener('submit',function(e){
        e.preventDefault();
        // console.log(userInput)
        const guess = parseInt(userInput.value);
        // console.log(guess)
        ValidGuess(guess);
    
});
}

function ValidGuess(guess){
    
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('please enter a number is greates is 1')
    } else if(guess>100){
        alert('please enter a number is less then 100')
    }else{
        if(numGuess === 10){
           displayGuess(guess);
           displayMessage(`Game Over. Random number is ${randomNumber}`);
           endGame();
        }else{
            prvGuess.push(guess);
            displayGuess(guess);
            chackGuess(guess);
        }
    }
}

function chackGuess (guess){
    if(guess ===randomNumber){
        displayMessage('You suggest is right');
        endGame();
    }else if(guess<randomNumber){
        displayMessage('Number is TOO low');
    }else if(guess>randomNumber){
        displayMessage('NUmber is TOOO high')
    }
}

function displayGuess(guess){
    userInput.value ='';
    guessSlot.innerHTML += `${guess }`;
    // console.log(numGuess)
   numGuess++;
   remaining.innerHTML =`${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
    
}

function endGame(){
    userInput.value =``;
    userInput.setAttribute('disabled',' ');
    p.classList.add('button');
    p.innerHTML = `<h2 class ="newGame" >Start new Game</h2>`
    startOver.appendChild(p)
    playGame =false;
    newGame();
}

function newGame(){
     const newGameButton = document.querySelector('.newGame')
     newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random*100+1);
        prvGuess = [];
        playGame = true;
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML =''
     })
}

