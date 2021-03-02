const card = document.querySelectorAll(".card__inner");
const cardImg = document.querySelectorAll("img");
console.log(cardImg);

card.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
    //  showImages();
  });
});

let animals = new Array();
for (let i = 1; i < 7; i++) {
  animals.push(`./img/animal${i}.jpg`);
}
//console.log(animals);

for (let i = 0; i < cardImg.length; i++) {
  cardImg[i].src = animals[animals.length - 3];
  // for (let j = 0; j < animals.length - 1; j++) {
  //   cardImg[i].src = animals[j];
  //   continue;
  // }
}
