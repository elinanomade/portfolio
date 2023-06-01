// const prevButton = document.querySelector(".prev-button");
// const nextButton = document.querySelector(".next-button");
// const carouselItems = document.querySelector(".carousel-items");
// const carouselItemWidth = document.querySelector(".carousel-item").clientWidth;
// let currentPosition = 0;

// prevButton.addEventListener("click", () => {
//   if (currentPosition < 0) {
//     currentPosition += carouselItemWidth;
//     carouselItems.style.transform = `translateX(${currentPosition}px)`;
//   }
// });

// nextButton.addEventListener("click", () => {
//   if (currentPosition > -carouselItemWidth * 7) {
//     currentPosition -= carouselItemWidth;
//     carouselItems.style.transform = `translateX(${currentPosition}px)`;
//   }
// });
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}
