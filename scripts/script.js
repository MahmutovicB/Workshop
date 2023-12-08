let currentProductIndex = 1;
const totalProducts = 5; // Change this to the total number of images in the "images/" folder
let currentDaskeIndex = 1;
const totalDaske = 2;
let currentStolIndex = 1;
const totalStol = 3;
currentKrevetIndex = 1;
const totalKrevet = 3;

// Preload images
const images = [];
for (let i = 1; i <= totalProducts; i++) {
  images[i] = new Image();
  images[i].src = `images/sjecke/sjecke${i}.jpg`;
  console.log(currentProductIndex);
  console.log(images[i].src);
}

//Preload stol images
const stolImages = [];
for (let i = 1; i <= totalStol; i++) {
  stolImages[i] = new Image();
  stolImages[i].src = `images/stol/stol${i}.jpg`;
  console.log(currentStolIndex);
  console.log(stolImages[i].src);
}



function changeProduct(n, category) {
  switch(category) {
    case 'sjecke':
      currentProductIndex += n;
      showProduct(currentProductIndex);
      break;
    case 'daske':
      currentDaskeIndex += n;
      showDaske(currentDaskeIndex);
      break;
    case 'stol':
      currentStolIndex += n;
      showStol(currentStolIndex);
      break;
    case 'krevet':
      currentKrevetIndex += n;
      showKrevet(currentKrevetIndex);
      break;
  }
}

function showKrevet(n){
  const krevet = document.querySelector('.slider-image4');

  if(n>totalKrevet) {
    currentKrevetIndex = 1;
  }
  if(n<1) {
    currentKrevetIndex = totalKrevet;
  }

  krevet.style.display = 'none';

  krevet.src = `images/krevet/krevet${currentKrevetIndex}.jpg`;
  krevet.style.display = 'block';
}

function showStol(n){
  const stol = document.querySelector('.slider-image3');

  if(n>totalStol) {
    currentStolIndex = 1;
  }
  if(n<1) {
    currentStolIndex = totalStol;
  }

  stol.style.display = 'none';

  stol.src = `images/stolovi/stol${currentStolIndex}.jpg`;
  stol.style.display = 'block';
}

function showDaske(n) {
  const daske = document.querySelector('.slider-image2');

  if (n > totalDaske) {
    currentDaskeIndex = 1;
  }
  if (n < 1) {
    currentDaskeIndex = totalDaske;
  }

  daske.style.display = 'none';

  daske.src = `images/daske/daske${currentDaskeIndex}.jpg`;
  daske.style.display = 'block';
}

function showProduct(n) {
  const products = document.querySelector('.slider-image');


  if (n > totalProducts) {
    currentProductIndex = 1;
  }
  if (n < 1) {
    currentProductIndex = totalProducts;
  }
  
  products.style.display = 'none';
  
  products.src = images[currentProductIndex].src;
  products.style.display = 'block';
}
