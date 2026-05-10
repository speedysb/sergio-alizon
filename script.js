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

/* =========================
   FAVORITE SLIDER
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

/* AUTO FAVORITES */

setInterval(() => {

  nextFavoriteSlide();

}, 2000);

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

/* CLOSE MENU AFTER CLICK */

const navItems =
document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

  item.addEventListener("click", () => {

    navLinks.classList.remove("show-menu");

  });

});

/* =========================
   COUNTDOWN TIMER
========================= */

const countdown =
document.getElementById("countdown");

const weddingDate =
new Date("July 18, 2026 14:00:00").getTime();

setInterval(() => {

  const now =
  new Date().getTime();

  const distance =
  weddingDate - now;

  const days =
  Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours =
  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes =
  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds =
  Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `

    <div class="count-box">
      <span>${days}</span>
      <p>Días</p>
    </div>

    <div class="count-box">
      <span>${hours}</span>
      <p>Horas</p>
    </div>

    <div class="count-box">
      <span>${minutes}</span>
      <p>Min</p>
    </div>

    <div class="count-box">
      <span>${seconds}</span>
      <p>Seg</p>
    </div>

  `;

}, 1000);
