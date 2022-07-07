let start;
let end;
let playerName;
let cardsAmount;
let cardNum;

let animals = new Array();
let flippedCards = new Array();
let count = 0;
let hiddenCards = 0;

const gameButton = document.querySelector(".new-game-button");
const cardsContainer = document.querySelector(".card__container");
let cards;
//

//hide cards
cardsContainer.classList.add("is-hidden");
// add event to the button
gameButton.addEventListener("click", hideButton);

//when button is clicked, hide it and start following functions:
function hideButton() {
  gameButton.style.display = "none";
  cardsContainer.classList.remove("is-hidden");
  playerName = prompt(`Hello! What is your name?`);
  cardsAmount = prompt(
    `How much cards do you want to play? (Pls choose only even numbers from 4 to 12)`
  );
  start = performance.now();
  // start = new Date();

  checkCardsAmount();
  loadArray();
  shuffleArray();
  createDivs();
  // loadDivs();
  setFlipping();
}

//check the right amount of cards
function checkCardsAmount() {
  if (cardsAmount > 12) {
    alert(`Pls choose only even numbers from 4 to 12`);
    document.location.reload();
  } else if (cardsAmount < 4) {
    alert(`Pls choose only even numbers from 4 to 12`);
    document.location.reload();
  } else if (cardsAmount % 2 !== 0) {
    alert(`Pls choose only even numbers from 4 to 12`);
    document.location.reload();
  } else {
    return;
  }
}

// create objects in array (twice with the same name)
function loadArray() {
  for (let i = 1; i < cardsAmount / 2 + 1; i++) {
    animals.push(`./img/animal${i}.jpg`);
  }
  // animals = [...animals,...animals];//concat?
  for (let i = 1; i < cardsAmount / 2 + 1; i++) {
    animals.push(`./img/animal${i}.jpg`);
  }
}
// function loadArray() {
//   for (let i = 1; i < 7; i++) {
//     animals.push(`./img/animal${i}.jpg`);
//   }
//   for (let i = 1; i < 7; i++) {
//     animals.push(`./img/animal${i}.jpg`);
//   }
// }

//shuffle images in array
function shuffleArray() {
  for (var i = animals.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var temp = animals[i];
    animals[i] = animals[randomIndex];
    animals[randomIndex] = temp;
  }
}

//create exact amount of cards need for the game
function createDivs() {
  // console.log(animals);
  cardsContainer.innerHTML = null;
  for (let i = 0; i < animals.length; i++) {
    cardsContainer.innerHTML += `<div class="card">
        <div class="card__inner">
          <div class="card__face card__face--front">            
          </div>

          <div class="card__face card__face--back">
            <img src="${animals[i]}" alt="picture of the animal" />
          </div>
        </div>
      </div>`;
  }
}
// {/* <h2>${cardNum}</h2> */}
//load cards with each img from array

// function loadDivs() {
//   for (let i = 0; i < cardImg.length; i++) {
//     for (let j = 0; j < 1; j++) {
//       cardImg[i].src = animals[i];
//     }
//   }
// }
// function loadDivs() {
//   for (let i = 0; i < animals.length; i++) {
//     for (let j = 0; j < 1; j++) {
//       cardImg[i].src = animals[i];
//     }
//   }
// }

//each card has event on click to flip
function setFlipping() {
  cards = document.querySelectorAll(".card__inner");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      count++;
      // if (count <= 2) {
      card.classList.toggle("is-flipped");
      card.parentElement.classList.toggle("is-flipped");
      //each flipped card push to array
      flippedCards.push(card);
      //after 2 sec it starts to check flipped cards
      setTimeout(function () {
        if (count < 2) {
          return;
        } else if (count == 2) {
          //check if cards are similar - hideCards(), if cards are different - flipCards(), then clear array
          if (checkDoubles() === 0) {
            hideCards();
          } else {
            flipCards();
          }
          count = 0;
          flippedCards = new Array();
        } else {
          //when more than 2 cards are flipped - flip it backward and clear all counters and array
          flipCards();
          count = 0;
          flippedCards = new Array();
        }
      }, 2000);
    });
  });
}
//return true (0) - if cards are similar, return false (1,-1) - if cards are deifferent
function checkDoubles() {
  let firstCard = flippedCards[0].children[1].childNodes[1].currentSrc;
  let secondCard = flippedCards[1].children[1].childNodes[1].currentSrc;

  return firstCard.localeCompare(secondCard);
}

//remove css class "is-flipped"
function flipCards() {
  flippedCards.forEach((element) => {
    element.classList.toggle("is-flipped");
  });
}

//change css class to "is-hidden"(visibility:hidden) and count hidden cards
function hideCards() {
  flippedCards.forEach((element) => {
    element.parentElement.classList.add("is-hidden");
  });
  timeout = setTimeout(function () {
    checkHidden();
  }, 200);
}

//when all cards are hidden - do the following:
function checkHidden() {
  hiddenCards += 2;
  if (hiddenCards == animals.length) {
    end = performance.now();
    // end = new Date();
    // let durationMilisec = Math.floor(end.getTime() - start.getTime());
    let durationMin = Math.floor((end - start) / 60000);
    let durationSec = Math.floor((end - start) / 1000);
    // showTime();
    alert(
      `Congratulations, ${playerName}!🎉 You've made it in ${durationMin}:${durationSec}`
    );
    showButton();
  }
}

// function showTime() {
//   if (durationMin < 10) {
//     return `0${durationMin}`;
//   } else if (durationSec < 10) {
//     return `0${durationSec}`;
//   }
// }
//reload the page and show the new game button
function showButton() {
  // gameButton.style.display = "block";
  document.location.reload();
}
