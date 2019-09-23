'use strict';

//global variables
Product.allImages=[];
var productImage = document.getElementById('productImage');
var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');

var leftProductIndex = null;
var middleProductIndex = null;
var rightProductIndex = null;

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
    leftProductIndex = randomProduct();
    middleProductIndex = randomProduct();
    rightProductIndex = randomProduct();
  } while(leftProductIndex === middleProductIndex || leftProductIndex === rightProductIndex || middleProductIndex === rightProductIndex);

  Product.allImages[leftProductIndex].view++;
  Product.allImages[middleProductIndex].views++;
  Product.allImages[rightProductIndex].views++;
}

var handleClickOnProduct = function(event){
  var prodClicked = event.target.id;
  if (prodClicked === 'left' || prodClicked === 'middle' || prodClicked === 'right'){
    prodVote++;
    if (prodClicked ==='left'){
      Product.allImages[leftProductIndex].click++;
    }
  }else if(prodClicked === 'middle'){
    Product.allImages[middleProductIndex].click++;

  }else if(prodClicked ==='right'){
    Product.allImages[rightProductIndex].click++;
  } else{
    alert('You didn\'t click on an image!');
  }
};

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
