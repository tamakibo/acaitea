const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[currentSlide].classList.add('active');

  currentSlide++;

  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  setTimeout(showSlide, 2000);
}

showSlide();


/*  */
/* const products = document.querySelectorAll('.product');
let img = document.getElementById('product-number-one');
let img2 = document.getElementById('product-2');
let img3 = document.getElementById('product-3');

products.forEach((product) => {
  const img = product.getElement;
  const details = product.querySelector('.productDetails');

  product.addEventListener('mouseover', () => {
    img.style.opacity = '0.4';
    details.style.opacity = '1';
  });

  product.addEventListener('mouseout', () => {
    img.style.opacity = '1';
    details.style.opacity = '0';
  });
}); */




/* const imgIds = ['product-number-one', 'product-2', 'product-3'];

imgIds.forEach((id) => {
  const img = document.getElementById(id);
  const parent = img.parentElement;

  parent.addEventListener('mouseover', () => {
    img.style.opacity = '0.4';
    parent.querySelector('.productDetails').style.opacity = '1';
  });

  parent.addEventListener('mouseout', () => {
    img.style.opacity = '1';
    parent.querySelector('.productDetails').style.opacity = '0';
  });
}); */


/* 
const products = document.querySelectorAll('.product');
const img1 = document.querySelector('img[alt="product_1"]');
const img2 = document.querySelector('img[alt="product_2"]');
const img3 = document.querySelector('img[alt="product_3"]');

products.forEach((product) => {
  const details = product.querySelector('.productDetails');

  img1.addEventListener('mouseover', () => {
    img1.style.opacity = '0.4';
    details.style.opacity = '1';
  });

  img1.addEventListener('mouseout', () => {
    img1.style.opacity = '1';
    details.style.opacity = '0';
  });

  img2.addEventListener('mouseover', () => {
    img2.style.opacity = '0.4';
    details.style.opacity = '1';
  });

  img2.addEventListener('mouseout', () => {
    img2.style.opacity = '1';
    details.style.opacity = '0';
  });

  img3.addEventListener('mouseover', () => {
    img3.style.opacity = '0.4';
    details.style.opacity = '1';
  });

  img3.addEventListener('mouseout', () => {
    img3.style.opacity = '1';
    details.style.opacity = '0';
  });

  details.addEventListener('mouseover', () => {
    img3.style.opacity = '0.4';
    details.style.opacity = '1';
  });

  details.addEventListener('mouseout', () => {
    img3.style.opacity = '1';
    details.style.opacity = '0';
  });
}); */
/* 
const img = document.getElementById('teaBox');

products.forEach((product) => { */
 /*  const img = product.querySelector('img'); */
/*   const details = product.querySelector('.productDetails');

  product.addEventListener('mouseover', () => {
    img.style.opacity = '0.4';
    details.style.opacity = '1';
  });

  product.addEventListener('mouseout', () => {
    img.style.opacity = '1';
    details.style.opacity = '0';
  });
}); */

const products = document.querySelectorAll('.product');
const teaBoxes = document.querySelectorAll('.teaBox');

products.forEach((product, index) => {
  const details = product.querySelector('.productDetails');
  const teaBox = teaBoxes[index];

  teaBox.addEventListener('mouseover', () => {
    teaBox.style.opacity = '0.4';
    details.style.opacity = '1';
  });

  teaBox.addEventListener('mouseout', () => {
    teaBox.style.opacity = '1';
    details.style.opacity = '0';
  });

  details.addEventListener('mouseover', () => {
    teaBox.style.opacity = '0.4';
    details.style.opacity = '1';
  });

  details.addEventListener('mouseout', () => {
    teaBox.style.opacity = '1';
    details.style.opacity = '0';
  });
});

