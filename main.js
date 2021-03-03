const cards = document.querySelectorAll(".card__inner");
const cardImg = document.querySelectorAll("img");
console.log(cardImg);

cards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
    //  showImages();
  });
});

let animals = new Array();
for (let i = 1; i < 7; i++) {
  animals.push(`./img/animal${i}.jpg`);
}
for (let i = 1; i < 7; i++) {
  animals.push(`./img/animal${i}.jpg`);
}
//console.log(animals);

for (let i = 0; i < cardImg.length; i++) {
  for (let j = 0; j < 1; j++) {
    cardImg[i].src = animals[i];
  }
}
