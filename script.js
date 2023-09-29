'use strict';

// Selecting Elements
// const score0 = document.getElementById("score--0");
// const score1 = document.getElementById("score--1");

// const diceEl = document.querySelector(".dice");

// const btnNew = document.querySelector(".btn--new")
// const btnRoll = document.querySelector(".btn--roll")
// const btnHold = document.querySelector(".btn--hold")

// const current0E0 = document.getElementById("current--0")
// const current1E1 = document.getElementById("current--1")

// const player0 = document.querySelector(".player--0 ")
// const player1 = document.querySelector(".player--1 ")



// // Starting conditions
// score0.textContent = 0
// score1.textContent = 0
// diceEl.classList.remove("hidden")



// //Adding EventListener to the btn's
// let score ,currentScore , activePlayer ,playing;

// const init = function() {

//     score = [0 , 0]
//     currentScore = 0
//     activePlayer = 0
//     playing = true 

//         score0.textContent = 0
//         score1.textContent = 0

//         current0E0.textContent = 0
//         current1E1.textContent = 0

//         player0.classList.remove("player--winner")
//         player1.classList.remove("player--winner")

//         player0.classList.add("player--active")
//         player1.classList.remove("player--active")

//         diceEl.classList.remove("hidden")

// }

// init()

// const switchPlayer = function() {
//     document.getElementById(`current--${activePlayer}`).textContent = 0
//     currentScore = 0
//     activePlayer = activePlayer == 0 ? 1 : 0
//     player0.classList.toggle("player--active")
//     player1.classList.toggle("player--active")
// }


// btnRoll.addEventListener("click" , function() {
//     if(playing) {
//         // 1. Generate Dice Roll
//         const diceRoll = Math.trunc(Math.random() * 6) + 1 

//         //2.Display Dice
//         diceEl.classList.remove("hidden")
//         diceEl.src = `dice-${diceRoll}.png`
    
//         // 3. Check for rolled 1: if true , 
//         if (diceRoll != 1) {
//             // Add dice to the current Score
//             currentScore += diceRoll
//             document.getElementById(`current--${activePlayer}`).textContent = currentScore
//             // current0E0.textContent = currentScore
//             // console.log(currentScore)
    
//         } else {
//                 //switch to next player
//             switchPlayer()
            
//         }
//     }
    
   
// })


// btnHold.addEventListener("click" , function() {
//     if (playing) {
//         score[activePlayer] += currentScore;
//         document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
    
//         // 2. Check if Player's score is >= 100
//         if (score[activePlayer] >= 100) {
//             playing = false
//             diceEl.classList.add("hidden")
//             document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
//             document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
//         } else {
//             //3 . Switching to next Player
//             switchPlayer()
//         }
//     }
//     // 1. Add current Score to active Player's score
// })


// btnNew.addEventListener("click" ,init)








// **Practice Mode**

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1")

const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")

const imageSrc = document.querySelector(".dice")

const btnRollDice = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const btnNew = document.querySelector(".btn--new")

const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")


imageSrc.classList.remove("hidden")

let score , currentScore , activePlayer , player;

const init = function() {
    score0.textContent = 0
    score1.textContent = 0
    
    current0El.textContent = 0
    current1El.textContent = 0
    
    score = [0 ,0 ]
    currentScore = 0
    activePlayer = 0
    player = true

    player0.classList.remove("player--winner")
    player1.classList.remove("player--winner")
    
    player0.classList.add("player--active")

    imageSrc.classList.remove("hidden")
    
}

init()

const swapPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer == 0 ? 1 : 0
        player0.classList.toggle("player--active")
        player1.classList.toggle("player--active")
}


// Roll Dice Btn
btnRollDice.addEventListener("click" , function() {
    if(player) {
        const roll = Math.trunc(Math.random() * 6) + 1
        imageSrc.src = `dice-${roll}.png`    
        if (roll != 1) {
            currentScore += roll
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            swapPlayer()
        }
    }
    
})

// Hold Btn 
btnHold.addEventListener("click" , function() {
    if(player) {
        score[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
        if (score[activePlayer] >= 100) {
            player = false
            imageSrc.classList.add("hidden")
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
        } else {
            swapPlayer()
        }
    }
   
})


// New Btn 
btnNew.addEventListener("click" , init)
