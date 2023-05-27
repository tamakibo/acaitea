const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const inputField = document.querySelector('input[name="quantity"]');

plusBtn.addEventListener('click', function() {
  inputField.value = parseInt(inputField.value) + 1;
});

minusBtn.addEventListener('click', function() {
  if (inputField.value > 1) {
    inputField.value = parseInt(inputField.value) - 1;
  }
});

/* IMAGE */
// Get the main product image and thumbnail images
const mainImage = document.querySelector('.product-image img');
const thumbnailImages = document.querySelectorAll('.thumbnail-images img');

// Add a click event listener to each thumbnail image
thumbnailImages.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // Change the main image to the clicked thumbnail image
    mainImage.src = thumbnail.src;
  });
});


/* SLIDER */
const sliderWrapper = document.getElementById('slider-wrapper');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const productCards = document.querySelectorAll('.product-card');
const productCardWidth = productCards[0].offsetWidth;
const sliderWrapperWidth = productCardWidth * productCards.length;
let currentPosition = 0;
let maxPosition = -(sliderWrapperWidth - sliderWrapper.parentElement.offsetWidth + productCardWidth);

leftArrow.addEventListener('click', () => {
  currentPosition += productCardWidth;
  if (currentPosition > 0) {
    currentPosition = 0;
  }
  sliderWrapper.style.transform = `translateX(${currentPosition}px)`;
});

rightArrow.addEventListener('click', () => {
  currentPosition -= productCardWidth;
  if (currentPosition < maxPosition) {
    currentPosition = maxPosition;
  }
  sliderWrapper.style.transform = `translateX(${currentPosition}px)`;
});


/* limit scroll */