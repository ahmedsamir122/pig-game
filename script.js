'use strict';
let newBtn= document.querySelector('.btn--new');
let diceBtn= document.querySelector('.btn--roll');
let holdBtn= document.querySelector('.btn--hold');
let img = document.querySelector('img');
let currentScore0 = document.querySelector('#current--0');
let hold0 = document.querySelector('#score--0');
let hold1 = document.querySelector('#score--1');
let currentScore1 = document.querySelector('#current--1');
let activePlayer = document.querySelectorAll('section');
hold0.textContent=0;
hold1.textContent=0;
let playing = true;

currentScore0.textContent = 0;
currentScore1.textContent = 0;
diceBtn.addEventListener('click',()=>{
    if(playing){
    let guess = Math.trunc(Math.random()*6)+1;
    img.src=`dice-${guess}.png`;
    if (guess===1){
        for(let i=0; i<activePlayer.length; i++){
            activePlayer[i].classList.toggle('player--active');  
            if(!activePlayer[i].classList.contains('player--active')){
                document.getElementById(`current--${i}`).textContent=0;
            }                     
        }
    }
    else if(guess > 1 ){
        for (let i=0; i<activePlayer.length; i++){
            if(activePlayer[i].classList.contains('player--active')){                
                document.getElementById(`current--${i}`).textContent=Number(document.getElementById(`current--${i}`).textContent)+guess ;
            }
        }
    }
}
})
holdBtn.addEventListener('click',()=>{
if(playing){
    for (let i=0; i<activePlayer.length; i++){
        
        if(activePlayer[i].classList.contains('player--active')){                
            document.getElementById(`score--${i}`).textContent=Number(document.getElementById(`current--${i}`).textContent)+Number(document.getElementById(`score--${i}`).textContent) ;
            document.getElementById(`current--${i}`).textContent=0;
            if(document.getElementById(`score--${i}`).textContent>=100)
            {
                playing=false;
                activePlayer[i].classList.add('player--winner');
            }
        }
        activePlayer[i].classList.toggle('player--active'); 
 
    }
}
})
newBtn.addEventListener('click',()=>{
    for(let i=0; i<activePlayer.length; i++){
        document.getElementById(`score--${i}`).textContent=0;
        document.getElementById(`current--${i}`).textContent=0;
        activePlayer[i].classList.remove('player--winner');
    }
    playing=true;
})