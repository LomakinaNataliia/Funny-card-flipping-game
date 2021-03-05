let animals = new Array();
let flippedCards = new Array();

const cards = document.querySelectorAll(".card__inner");
let cardImg = document.querySelectorAll("img");
// let flippedCard = document.querySelectorAll(".is-flipped");

let count = 0;

function fillArray() {
  for (let i = 1; i < 7; i++) {
    animals.push(`./img/animal${i}.jpg`);
  }
  for (let i = 1; i < 7; i++) {
    animals.push(`./img/animal${i}.jpg`);
  }
}

function shuffleArray() {
  for (var i = animals.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var temp = animals[i];
    animals[i] = animals[randomIndex];
    animals[randomIndex] = temp;
  }
}

function fillDivs() {
  for (let i = 0; i < cardImg.length; i++) {
    for (let j = 0; j < 1; j++) {
      cardImg[i].src = animals[i];
    }
  }
}

window.onload = function () {
  fillArray();
  shuffleArray();
  fillDivs();

  //new game button
};

cards.forEach((card) => {
  card.addEventListener("click", function () {
    count++;
    card.classList.toggle("is-flipped");
    card.parentElement.classList.toggle("is-flipped");

    flippedCards.push(card);
    setTimeout(function () {
      if (count == 2) {
        // console.log(count);
        // console.log(flippedCards);

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
  });
});

//if two cards flipped - checkDoubles & clear? else - continue
//checkDoubles(); //two cards are simmilar - setTimeout(hideCards, 2000);//two cards are different - setTimeout(flipCards, 2000);

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
