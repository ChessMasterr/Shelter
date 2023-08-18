const burgerItem = document.querySelector(".burger");
const menu = document.querySelector(".head_nav");
const linkClick = document.querySelectorAll(".hedaer__link");
const shadowBurger = document.querySelector(".shadow");
const bodyOverflow = document.querySelector(".body");
const boosLink = document.querySelector(".hedaer__link_1");

const showShadow = () => {
  shadowBurger.style.display = "block";
  setTimeout(() => {
    shadowBurger.style.opacity = "1";
  }, 10);
};

const closeShadow = () => {
  shadowBurger.style.opacity = "0";
  setTimeout(() => {
    shadowBurger.style.display = "none";
  }, 850);
};

// Переключатель бургер меню
function toggleMenu() {
  menu.classList.toggle("head_nav_active");
  burgerItem.classList.toggle("burger_active");
  shadowBurger.classList.toggle("shadow_active");
  bodyOverflow.classList.toggle("body_hidden");
  if (shadowBurger.classList.contains("shadow_active")) {
    showShadow();
  } else {
    closeShadow();
  }
}
burgerItem.addEventListener("click", toggleMenu);

// Закрытие бургер меню

function closeMenu() {
  menu.classList.remove("head_nav_active");
  burgerItem.classList.remove("burger_active");
  shadowBurger.classList.remove("shadow_active");
  bodyOverflow.classList.remove("body_hidden");
  if (shadowBurger.classList.contains("shadow_active")) {
    showShadow();
  } else {
    closeShadow();
  }
}

// Закрытие по клику на ссылки
linkClick.forEach((element) => {
  element.addEventListener("click", closeMenu);
});

// Закрытие по клику на главную ссылку
boosLink.addEventListener("click", closeMenu);

// Закрытие по клику на теньку
shadowBurger.addEventListener("click", closeMenu);

// Карусель

const BTN_LEFT = document.querySelector(".left__button");
const BTN_RIGHT = document.querySelector(".right__button");
const CAROUSEL = document.querySelector(".carousel");

const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ITEM_ACTIVE = document.querySelector("#item-active");

const imgArr = [
  "jennifer.png",
  "charly.png",
  "freddie.png",
  "katrine.png",
  "scarlet.png",
  "sophia.png",
  "timmy.png",
  "woody.png",
];
const imgNames = [
  "Jennifer",
  "Charly",
  "Freddie",
  "Katrine",
  "Scarlett",
  "Sophia",
  "Timmy",
  "Woody",
];

const getRamdonImg = () => {
  return Math.round(Math.random() * (imgArr.length - 1));
};
let randonArrActive = [];
let randomActivIndex = [];
let randonLeftRight = [];
let randonLeftRightIndex = [];

const fillingRandom = () => {
  let a = getRamdonImg();
  if (randomActivIndex.includes(a)) {
    fillingRandom();
  } else {
    randomActivIndex.push(a);
  }
};

fillingRandom();
fillingRandom();
fillingRandom();

// функция создания карт для Active при загрузке страницы
const createCardTemplateActive = (i) => {
  let imgNameSrc = randomActivIndex[i - 1];

  const card1 = document.createElement("div"); // создал карту
  card1.classList.add("cards"); // добавил класс
  card1.id = "id" + i;

  let a = `${imgNames[imgNameSrc]}`;
  randonArrActive.push(a);

  const imgCard1 = document.createElement("img"); // добывил img
  imgCard1.src = `./img/our-pets-img/${imgArr[imgNameSrc]}`; // добавил рандомную картинку
  imgCard1.classList.add("cards__img"); //добавли класс картинке
  imgCard1.alt = `${imgNames[imgNameSrc]}`;
  card1.appendChild(imgCard1);

  const card1DivText = document.createElement("div"); // добавил div к тексту
  card1DivText.classList.add("cards__text"); // добавил класс дива текства

  const card1DivTextP = document.createElement("p"); // добавли р
  card1DivTextP.innerText = imgNames[imgNameSrc]; // добавил текст к р
  card1DivText.appendChild(card1DivTextP);
  card1.appendChild(card1DivText);

  const buttonCards = document.createElement("button"); // добавил кнопку
  buttonCards.classList.add("cards__button"); // добавил класс к кнопке
  buttonCards.innerText = "Learn more"; // добавил текст к кнопке
  card1.appendChild(buttonCards);
  return card1;
};

// функция создания карт для левой и правой части слайдера

const createCardTemplate = (i) => {
  let ramdonImg = getRamdonImg();

  if (randonArrActive.includes(imgNames[ramdonImg])) {
    return createCardTemplate(i);
  } else if (randonLeftRight.includes(imgNames[ramdonImg])) {
    return createCardTemplate(i);
  } else {
    ramdonImg = ramdonImg;
  }
  const card1 = document.createElement("div"); // создал карту
  card1.classList.add("cards"); // добавил класс
  card1.id = "id" + i;

  let a = `${imgNames[ramdonImg]}`;
  randonLeftRight.push(a);

  const imgCard1 = document.createElement("img"); // добывил img
  imgCard1.src = `./img/our-pets-img/${imgArr[ramdonImg]}`; // добавил рандомную картинку
  imgCard1.classList.add("cards__img"); //добавли класс картинке
  imgCard1.alt = `${imgNames[ramdonImg]}`;
  card1.appendChild(imgCard1);

  const card1DivText = document.createElement("div"); // добавил div к тексту
  card1DivText.classList.add("cards__text"); // добавил класс дива текства

  const card1DivTextP = document.createElement("p"); // добавли р
  card1DivTextP.innerText = imgNames[ramdonImg]; // добавил текст к р
  card1DivText.appendChild(card1DivTextP);
  card1.appendChild(card1DivText);

  const buttonCards = document.createElement("button"); // добавил кнопку
  buttonCards.classList.add("cards__button"); // добавил класс к кнопке
  buttonCards.innerText = "Learn more"; // добавил текст к кнопке
  card1.appendChild(buttonCards);
  return card1;
};

// Создаем рандом для item-active

const createItemActive = () => {
  if (createItemActive.isRun) {
    return false;
  }
  ITEM_ACTIVE.innerHTML = "";
  for (let i = 1; i < 4; i++) {
    const card1 = createCardTemplateActive(i);
    ITEM_ACTIVE.appendChild(card1);
  }
  createItemActive.isRun = true;
};

createItemActive();

// Создаем рандом для item-left

const createItemLeft = () => {
  if (createItemLeft.isRun) {
    return false;
  }
  ITEM_LEFT.innerHTML = "";
  ITEM_RIGHT.innerHTML = "";
  for (let i = 1; i < 4; i++) {
    const card1 = createCardTemplate(i);
    ITEM_LEFT.appendChild(card1);
  }
  createItemLeft.isRun = true;

  ITEM_RIGHT.innerHTML = ITEM_LEFT.innerHTML;
};

createItemLeft();

// При нажатии на левую кнопку
const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
  ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;
  randonArrActive = randonLeftRight;
};

// При нажатии на правую кнопку
const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
  ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
  randonArrActive = randonLeftRight;
};

BTN_RIGHT.addEventListener("click", moveRight);
BTN_LEFT.addEventListener("click", moveLeft);

const card1 = createCardTemplate();

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  randonLeftRight = [];

  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    const leftItems = ITEM_LEFT.innerHTML;

    // Перезаписываем левый блок

    ITEM_ACTIVE.innerHTML = leftItems;

    ITEM_LEFT.innerHTML = "";
    for (let i = 1; i < 4; i++) {
      const card1 = createCardTemplate(i);
      ITEM_LEFT.appendChild(card1);
    }
  } else {
    CAROUSEL.classList.remove("transition-right");
    const rightItems = ITEM_RIGHT.innerHTML;
    document.querySelector("#item-active").innerHTML = rightItems;

    // Перезаписываем правый блок
    ITEM_RIGHT.innerHTML = "";
    for (let i = 1; i < 4; i++) {
      const card1 = createCardTemplate(i);
      ITEM_RIGHT.appendChild(card1);
    }
  }
  const cardsPopap = document.querySelectorAll(".cards");
  cardsPopap.forEach((element) => {
    element.addEventListener("click", () => popapShadowActiv(element));
  });

  // Возвращаем кнопкам функцию прослушивания клика
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});

// Popap модальное окно
// Переменные которые нужно поменять в popap
const popapTitle = document.querySelector(".popap_title");
const popapImg = document.querySelector(".popap_img");
const popapBreed = document.querySelector(".popap_breed");
const popapParagraph = document.querySelector(".popap_paragraph");
const agePopap = document.querySelector(".age");
const inoculations = document.querySelector(".inoculations");
const diseases = document.querySelector(".diseases");
const parasites = document.querySelector(".parasites");

// подключаю JSON
async function getQuotes(nameImg) {
  const quotes = "pets.json";
  const res = await fetch(quotes);
  const data = await res.json();
  let i = 0;
  if (nameImg == "Jennifer") {
    i = 0;
  } else if (nameImg == "Sophia") {
    i = 1;
  } else if (nameImg == "Woody") {
    i = 2;
  } else if (nameImg == "Scarlett") {
    i = 3;
  } else if (nameImg == "Katrine") {
    i = 4;
  } else if (nameImg == "Timmy") {
    i = 5;
  } else if (nameImg == "Freddie") {
    i = 6;
  } else if (nameImg == "Charly") {
    i = 7;
  }
  popapImg.src = data[i].img;
  popapTitle.innerText = data[i].name;
  popapBreed.innerText = `${data[i].type} - ${data[i].breed}`;
  popapParagraph.innerText = data[i].description;
  agePopap.innerText = data[i].age;
  inoculations.innerText = data[i].inoculations;
  diseases.innerText = data[i].diseases;
  parasites.innerText = data[i].parasites;
}

const popapShadow = document.querySelector(".popap_shadow");
const popapButtonClouse = document.querySelector(".popap_button");
const cardsPopap = document.querySelectorAll(".cards");
const cardsImg = document.querySelectorAll(".cards__img");

const popapShadowActiv = (e) => {
  const namePet = e.querySelector(".cards__img");
  getQuotes(namePet.alt);
  popapShadow.classList.add("active");
  bodyOverflow.classList.add("body_hidden");
};
function show(e) {
  console.log("eto", e);
}

const popapShadowClouse = () => {
  popapShadow.classList.remove("active");
  bodyOverflow.classList.remove("body_hidden");
};

cardsPopap.forEach((element) => {
  element.addEventListener("click", () => popapShadowActiv(element));
});

popapButtonClouse.addEventListener("click", popapShadowClouse);
popapShadow.addEventListener("click", popapShadowClouse);
