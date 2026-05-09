/* =========================
   HISTORIA SLIDER
========================= */

const storySlides =
document.querySelectorAll(".story-slide");

let currentStory = 0;

function showStorySlide(index){

  storySlides.forEach(slide => {

    slide.classList.remove("active");

  });

  storySlides[index]
  .classList.add("active");

}

function nextStorySlide(){

  currentStory++;

  if(currentStory >= storySlides.length){

    currentStory = 0;

  }

  showStorySlide(currentStory);

}

function prevStorySlide(){

  currentStory--;

  if(currentStory < 0){

    currentStory =
    storySlides.length - 1;

  }

  showStorySlide(currentStory);

}

/* AUTO CHANGE EVERY 3 SECONDS */

setInterval(() => {

  nextStorySlide();

}, 3000);

/* =========================
   FAVORITE PHOTOS SLIDER
========================= */

const favoriteSlides =
document.querySelectorAll(".favorite-slide");

let currentFavorite = 0;

function showFavoriteSlide(index){

  favoriteSlides.forEach(slide => {

    slide.classList.remove("active-favorite");

  });

  favoriteSlides[index]
  .classList.add("active-favorite");

}

function nextFavoriteSlide(){

  currentFavorite++;

  if(currentFavorite >= favoriteSlides.length){

    currentFavorite = 0;

  }

  showFavoriteSlide(currentFavorite);

}

function prevFavoriteSlide(){

  currentFavorite--;

  if(currentFavorite < 0){

    currentFavorite =
    favoriteSlides.length - 1;

  }

  showFavoriteSlide(currentFavorite);

}

/* AUTO CHANGE EVERY 2.5 SECONDS */

setInterval(() => {

  nextFavoriteSlide();

}, 2500);

/* =========================
   MOBILE MENU
========================= */

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("show-menu");

});
