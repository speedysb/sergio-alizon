/* STORY SLIDER */

const storySlides =
document.querySelectorAll(".story-slide");

let currentStory = 0;

setInterval(() => {

  storySlides[currentStory]
  .classList.remove("active");

  currentStory++;

  if(currentStory >= storySlides.length){
    currentStory = 0;
  }

  storySlides[currentStory]
  .classList.add("active");

}, 7000);

/* FAVORITE SLIDER */

const favoriteSlides =
document.querySelectorAll(".favorite-slide");

let currentFavorite = 0;

setInterval(() => {

  favoriteSlides[currentFavorite]
  .classList.remove("active-favorite");

  currentFavorite++;

  if(currentFavorite >= favoriteSlides.length){
    currentFavorite = 0;
  }

  favoriteSlides[currentFavorite]
  .classList.add("active-favorite");

}, 2500);

/* MOBILE MENU */

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("show-menu");

});
