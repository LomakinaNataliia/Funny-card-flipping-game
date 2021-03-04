let animals = new Array();

const cards = document.querySelectorAll(".card__inner");
const cardImg = document.querySelectorAll("img");

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
    card.classList.toggle("flipping");
    card.parentElement.classList.toggle("is-flipped");
    // checkDoubles(card);
  });
});

//if two cards flipped - checkDoubles & clear? else - continue
//checkDoubles(); //two cards are simmilar - setTimeout(hideCards, 2000);//two cards are different - setTimeout(flipCards, 2000);
// function checkDoubles(){
//   if(document.slide.src[0]===document.slide.src[1]{
//     setTimeout(hideCards, 2000);
//   }else{
//     setTimeout(flipCards, 2000);
//   }
// }

// function hideCards(){

// pika.classList.add("is-hidden");
// }

// function flipCards(){
//   pika.classList.remove("is-flipped");
// }
