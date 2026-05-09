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
