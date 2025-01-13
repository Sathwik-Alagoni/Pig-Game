'use strict';

const player1t = document.getElementById('score--0');
const player2t = document.getElementById('score--1');
const diceimg = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold')
const reset = document.querySelector('.btn--new')
let currentScore = 0;
let swapNumber = 0;
let totalScore = [0,0];

player1t.textContent = 0;
player2t.textContent = 0;
diceimg.classList.add('hidden');


function swap(){
    totalScore[swapNumber] = totalScore[swapNumber]+ currentScore;
    document.getElementById(`score--${swapNumber}`).textContent = totalScore[swapNumber];
    document.getElementById(`current--${swapNumber}`).textContent = 0;
    currentScore = 0;

    if(totalScore[swapNumber]>100){
        document.querySelector('.player--0').classList.add('player--winner');
        diceimg.classList.add('hidden');
        rollDice.disabled = true;
        hold.disabled = true;
    }
    else{
    swapNumber = swapNumber === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    }
}

function value100(){

}

rollDice.addEventListener("click", function(){
    const dice = Math.trunc(Math.random()*6)+1;
    diceimg.src = `dice-${dice}.png`;
    diceimg.classList.remove('hidden');

    if(dice!=1){
        currentScore+=dice;
        document.getElementById(`current--${swapNumber}`).textContent= currentScore;
    }
    else{
        swap();
    }
});


hold.addEventListener("click",function(){
    swap();
});


reset.addEventListener("click",function(){
    player1t.textContent = 0;
    player2t.textContent = 0;
    diceimg.classList.add('hidden');
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    rollDice.enabled = true;
    hold.enabled = true;
    swapNumber = 0;
    currentScore=0;
    totalScore=[0,0];
});
