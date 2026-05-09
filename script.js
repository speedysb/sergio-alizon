/* STORY SLIDESHOW */

const storySlides = document.querySelectorAll(".story-slide");

let currentStory = 0;

setInterval(() => {

  storySlides[currentStory].classList.remove("active");

  currentStory++;

  if(currentStory >= storySlides.length){
    currentStory = 0;
  }

  storySlides[currentStory].classList.add("active");

}, 7000);

/* FAVORITE PHOTOS AUTO ANIMATION */

const favoritePhotos =
document.querySelectorAll(".favorite-gallery img");

let currentPhoto = 0;

setInterval(() => {

  favoritePhotos.forEach(photo => {
    photo.style.opacity = "0.4";
    photo.style.transform = "scale(0.96)";
  });

  favoritePhotos[currentPhoto].style.opacity = "1";
  favoritePhotos[currentPhoto].style.transform = "scale(1.05)";

  currentPhoto++;

  if(currentPhoto >= favoritePhotos.length){
    currentPhoto = 0;
  }

}, 2500);
