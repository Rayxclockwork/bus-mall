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
  var random = Math.floor(Math.random() * Product.allImages.length)
  return random;
}

function renderProduct(){
  do{
    leftProduct = randomProduct();
    middleProduct = randomProduct();
    rightProduct = randomProduct();
  } while(leftProduct === middleProduct || leftProduct === rightProduct || middleProduct === rightProduct)

  Product.allImages[leftProduct].view++;
  Product.allImages[middleProduct].views++;
  Product.allImages[rightProduct].views++;
}

new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()
new Product()