const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const carouselItems = document.querySelector(".carousel-items");
const carouselItemWidth = document.querySelector(".carousel-item").clientWidth;
let currentPosition = 0;

prevButton.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += carouselItemWidth;
    carouselItems.style.transform = `translateX(${currentPosition}px)`;
  }
});

nextButton.addEventListener("click", () => {
  if (currentPosition > -carouselItemWidth * 7) {
    currentPosition -= carouselItemWidth;
    carouselItems.style.transform = `translateX(${currentPosition}px)`;
  }
});
