'use strict';

//global variables
Product.allImages=[];
Product.prevDup =[];
var productImage = document.getElementById('productImage');
var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');

var leftPI = null;
var middlePI= null;
var rightPI = null;

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

//Shows 3 different images in each set
function renderProduct(){
  display();

  do{
    leftPI = Product.prevDup[0];
    middlePI = Product.prevDup[1];
    rightPI = Product.prevDup[2];

  } while(leftPI === middlePI || leftPI === rightPI || middlePI === rightPI);

  Product.allImages[leftPI].view++;
  Product.allImages[middlePI].view++;
  Product.allImages[rightPI].view++;

  left.src = Product.allImages[leftPI].image;
  middle.src = Product.allImages[middlePI].image;
  right.src = Product.allImages[rightPI].image;
}

var handleClickOnProduct = function(event) {
  event.preventDefault();
  var prodClicked = event.target.id;
  if (prodClicked === 'left' || prodClicked === 'middle' || prodClicked === 'right'){
    prodVote++;

    if (prodClicked ==='left'){
      Product.allImages[leftPI].click++;

    } else if(prodClicked === 'middle'){
      Product.allImages[middlePI].click++;

    } else if(prodClicked ==='right'){
      Product.allImages[rightPI].click++;
    }
  } else{
    alert('You didn\'t click on an image!');
  }

  if(prodVote >= 25) {
    productImage.removeEventListener('click', handleClickOnProduct);
    chart();
    list();
    voteStorage();
  } else {
    renderProduct();
  }
};

//prevents images from being shown 2 sets in a row
function display(){
  //keeps array filled with 6 unique values, always
  while(Product.prevDup.length < 6) {
    var random = randomProduct();
    while(!Product.prevDup.includes(random)) {
      Product.prevDup.push(random);
    }
  }
  for(var i=0; i<Product.prevDup.length; i++){
    var temp = Product.prevDup.shift();
    Product.allImages[i].src = Product.allImages[temp].path;
  }
}


productImage.addEventListener('click', handleClickOnProduct);

//Populates list
function list(){
  var res = document.getElementById('res');
  for(var i=0; i<Product.allImages.length; i++){
    var votes = document.createElement('li');
    var votesP = document.createElement('p');
    var output = `${Product.allImages[i].name} got ${Product.allImages[i].click} votes with ${Product.allImages[i].view} views`;
    votesP.textContent = output;
    votes.appendChild(votesP);
    res.appendChild(votes);

  }
}
Product.objectName = [];
Product.objectClick = [];

function data(){
  for(var i=0; i < Product.allImages.length; i++)
    Product.objectName.push(Product.allImages[i].name);
  for(var j=0; j < Product.allImages.length; j++)
    Product.objectClick.push(Product.allImages[j].click);
  console.log(Product.objectClick);
}



//Creates chart
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
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
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
//local storage
function voteStorage(){
  var json = JSON.stringify(Product.allImages);
  localStorage.setItem('products', json);
}

function getVotes() {
  if (localStorage.product){
    var data = localStorage.getItem('products');
    var parsed = JSON.parse(data);

    for(var i = 0; i < parsed.length; i++);
    new Product(parsed[1].name, parsed[i].image, parsed[i].click, parsed[i].view);

  } else{
    new Product('Bag', 'imgs/bag.jpg');
    new Product('Banana Slicer', 'imgs/banana.jpg');
    new Product('Bathroom Helper', 'imgs/bathroom.jpg');
    new Product('Boots', 'imgs/boots.jpg');
    new Product('All in one Breakfast', 'imgs/breakfast.jpg');
    new Product('"Bubblegum"', 'imgs/bubblegum.jpg');
    new Product('Chair', 'imgs/chair.jpg');
    new Product('Cthulhu', 'imgs/cthulhu.jpg');
    new Product('Dog? Duck? Who knows?!', 'imgs/dog-duck.jpg');
    new Product('Dragon Meat', 'imgs/dragon.jpg');
    new Product('Pen', 'imgs/pen.jpg');
    new Product('Pet Powered Sweeper', 'imgs/pet-sweep.jpg');
    new Product('Pizza Scissors', 'imgs/scissors.jpg');
    new Product('Shark', 'imgs/shark.jpg');
    new Product('Child Labor', 'imgs/sweep.png');
    new Product('Tauntaun', 'imgs/tauntaun.jpg');
    new Product('Unicorn Meat', 'imgs/unicorn.jpg');
    new Product('Tentacle USB', 'imgs/usb.gif');
    new Product('Watering Can', 'imgs/water-can.jpg');
    new Product('Wine Glass', 'imgs/wine-glass.jpg');
  }
  //Product.allImages.click = parsed;
  renderProduct();
}

getVotes();
