'use strict';

//global variables
Product.allImages=[];
Product.uniqueArray =[];
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
new Product('sweep', 'imgs/sweep.png');
new Product('tauntaun', 'imgs/tauntaun.jpg');
new Product('unicorn', 'imgs/unicorn.jpg');
new Product('usb', 'imgs/usb.gif');
new Product('water-can', 'imgs/water-can.jpg');
new Product('wine-glass', 'imgs/wine-glass.jpg');

//Random function
function randomProduct(){
  var random = Math.floor(Math.random() * Product.allImages.length);
  return random;
}

function renderProduct(){

  display();

  do{
    leftProductIndex = Product.uniqueArray[0];
    middleProductIndex = Product.uniqueArray[1];
    rightProductIndex = Product.uniqueArray[2];

  } while(leftProductIndex === middleProductIndex || leftProductIndex === rightProductIndex || middleProductIndex === rightProductIndex);

  Product.allImages[leftProductIndex].view++;
  Product.allImages[middleProductIndex].view++;
  Product.allImages[rightProductIndex].view++;

  left.src = Product.allImages[leftProductIndex].image;
  middle.src = Product.allImages[middleProductIndex].image;
  right.src = Product.allImages[rightProductIndex].image;
}

var handleClickOnProduct = function(event) {
  if(prodVote >= 5) {
    productImage.removeEventListener('click', handleClickOnProduct);
    chart();
  } else{
    renderProduct();
  }
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
  Product.allImages[leftProductIndex].view++;
  Product.allImages[middleProductIndex].view++;
  Product.allImages[rightProductIndex].view++;
  // makeList();
};

//creates list
// function makeList(){
//   var ob = Product.allImages;
//   var list = document.getElementById('results');
//   for (var j=0; j < Product.allImages.length; j++);{

//     var newLi = document.createElement('li');
//     newLi.textContent = Product.allImages.name;
//     list.appendChild(newLi);
//     console.log('test');
//   }
// }



function display(){
  //keeps array filled with 6 unique values, always
  while(Product.uniqueArray.length < 6) {
    var random = randomProduct();
    while(!Product.uniqueArray.includes(random)) {
      Product.uniqueArray.push(random);
    }
  }
  for(var i=0; i<Product.uniqueArray.length; i++){
    var temp = Product.uniqueArray.shift();
    Product.allImages[i].src = Product.allImages[temp].path;
  }
}


renderProduct();

productImage.addEventListener('click', handleClickOnProduct);

Product.objectName =[];
Product.objectClick = [];

function data(){
  for(var i=0; i<Product.allImages.length; i++){
    Product.objectName.push(Product.allImages[i].name);
    Product.objectClick.push(Product.allImages[i].click);
  }
}
console.log(Product.objectClick);

function chart(){
  data();
  var ctx = document.getElementById('busmallChart');
  var chart = new Chart(ctx,{
    type:'bar',
    data:{
      labels: Product.objectName,
      datasets: [{
        label: '# of Votes',
        data: Product.objectClick,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes:[{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
