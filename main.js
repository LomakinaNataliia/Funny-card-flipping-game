let animals = new Array();
let flippedCards = new Array();
let count = 0;
let hiddenCards = 0;

const gameButton = document.querySelector(".new-game-button");
const cardsContainer = document.querySelector(".card__container");
const cards = document.querySelectorAll(".card__inner");
let cardImg = document.querySelectorAll("img");

//hide cards
cardsContainer.classList.add("is-hidden");
// add event to the button
gameButton.addEventListener("click", hideButton);

//when button is clicked, hide it and start following functions:
function hideButton() {
  gameButton.style.display = "none";
  cardsContainer.classList.remove("is-hidden");

  loadArray();
  shuffleArray();
  loadDivs();
  setFlipping();
}

//create 12 objects in array (6 and 6 same imges)
function loadArray() {
  for (let i = 1; i < 7; i++) {
    animals.push(`./img/animal${i}.jpg`);
  }
  for (let i = 1; i < 7; i++) {
    animals.push(`./img/animal${i}.jpg`);
  }
}

//shuffle images in array
function shuffleArray() {
  for (var i = animals.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var temp = animals[i];
    animals[i] = animals[randomIndex];
    animals[randomIndex] = temp;
  }
}

//fill in 12 blocks with each card
function loadDivs() {
  for (let i = 0; i < cardImg.length; i++) {
    for (let j = 0; j < 1; j++) {
      cardImg[i].src = animals[i];
    }
  }
}

//each card has event on click to flip
function setFlipping() {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      count++;
      if (count <= 2) {
        card.classList.toggle("is-flipped");
        card.parentElement.classList.toggle("is-flipped");
        //each flipped card push to array
        flippedCards.push(card);
        //after 2 sec it starts to check 2 flipped cards
        setTimeout(function () {
          if (count == 2) {
            //check if cards are similar - hideCards(), if cards are different - flipCards(), then clear array
            if (checkDoubles() === 0) {
              hideCards();
            } else {
              flipCards();
            }

            count = 0;
            flippedCards = new Array();
          } else {
          }
        }, 2000);
      } else {
        //when more than 2 cards are flipped - flip it backward and clear all counters and array
        flipCards();
        count = 0;
        flippedCards = new Array();
      }
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
  hiddenCards += 2;
  check12();
}

//when there are 12 hidden cards do the following:
function check12() {
  if (hiddenCards == 12) {
    alert(`Congratulations!🎉`);
    showButton();
  }
}

//reload the page and show the new game button
function showButton() {
  // gameButton.style.display = "block";
  document.location.reload();
}
