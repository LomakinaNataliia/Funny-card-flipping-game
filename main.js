let animals = new Array();
let flippedCards = new Array();

const cards = document.querySelectorAll(".card__inner");
let cardImg = document.querySelectorAll("img");
// let flippedCard = document.querySelectorAll(".is-flipped");

let count = 0;

//create 12 objects in array (6 and 6 same imges)
function fillArray() {
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
function fillDivs() {
  for (let i = 0; i < cardImg.length; i++) {
    for (let j = 0; j < 1; j++) {
      cardImg[i].src = animals[i];
    }
  }
}

//when page loads start following functions:
window.onload = function () {
  fillArray();
  shuffleArray();
  fillDivs();
  addClick();

  //new game button
};

//each card has event on click, each flipped card push to array

function addClick() {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      count++;
      if (count <= 2) {
        card.classList.toggle("is-flipped");
        card.parentElement.classList.toggle("is-flipped");

        flippedCards.push(card);
        //after 2 sec it starts to check 2 flipped cards
        setTimeout(function () {
          if (count == 2) {
            //chack if cards are similar - hideCards(), if cards are different - flipCards(), then clear array
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
        flipCards();
        count = 0;
        flippedCards = new Array();
      }
    });
  });
}

function checkDoubles() {
  let firstCard = flippedCards[0].children[1].childNodes[1].currentSrc;
  let secondCard = flippedCards[1].children[1].childNodes[1].currentSrc;

  return firstCard.localeCompare(secondCard);
}

function hideCards() {
  // setTimeout(function () {
  flippedCards.forEach((element) => {
    element.parentElement.classList.add("is-hidden");
  });
  // }, 5000);
}

function flipCards() {
  // setTimeout(function () {
  flippedCards.forEach((element) => {
    element.classList.toggle("is-flipped");
  });
  // }, 5000);
}
