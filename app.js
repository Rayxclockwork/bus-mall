'use strict';

//global variables
Product.allImages=[];
var productImage = document.getElementById('productImage');
var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');

var leftProduct = null;
var middleProduct = null;
var rightProduct = null;

//votes start at 0
var prodVote = 0;

//contructor function
function Product(name, image){
  this.name = name;
  this.image = image;
  this.click = 0;
  this.view = 0;

  Product.allImages.push(this);
}

//Random function
function randomProduct(){
  var random = Math.floor(Math.random() * Product.allImages.length);
  return random;
}

function renderProduct(){
  do{
    leftProduct = randomProduct();
    middleProduct = randomProduct();
    rightProduct = randomProduct();
  } while(leftProduct === middleProduct || leftProduct === rightProduct || middleProduct === rightProduct);

  Product.allImages[leftProduct].view++;
  Product.allImages[middleProduct].views++;
  Product.allImages[rightProduct].views++;
}

if (prodVote === 25){
  productImage.removeEventListener('click', handleClickOnProduct);
  for(var i=0; i < Product.allImages.length; i++)
  {
    var product = Product.allImages[i];
  }
} else{
  renderProduct();
}

new Product('bag', 'imgs/bag.jpg');
new Product('banana', 'imgs/banana.jpg');
new Product('bathroom', 'imgs/bathroom.jpg');
new Product('boots', 'imgs/boots.jpg');
new Product('breakfast', 'imgs/breakfast.jpg');
new Product('bubblegum', 'imgs/bubblegum.jpg');
new Product('chair', 'imgs/chair.jpg');
new Product('cthulhu', 'imgs/cthulhu.jpg');
new Product('dog-duck', 'imgs/dog-duck.jpg');
new Product('dragon', 'imgs/dragon.jpg');
new Product('pen', 'imgs/pen.jpg');
new Product('pet-sweep', 'imgs/pet-sweep.jpg');
new Product('scissors', 'imgs/scissors.jpg');
new Product('shark', 'imgs/shark.jpg');
new Product('sweep', 'imgs/sweep.jpg');
new Product('tauntaun', 'imgs/tauntaun.jpg');
new Product('unicorn', 'imgs/unicorn.jpg');
new Product('usb', 'imgs/usb.gif');
new Product('water-can', 'imgs/water-can.jpg');
new Product('wine-glass', 'imgs/wine-glass.jpg');

renderProduct();

productImage.addEventListener('click', handleClickOnProduct);
