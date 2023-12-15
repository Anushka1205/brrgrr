// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

let button= document.querySelectorAll(".button");
let ingredients= document.querySelectorAll(".items");

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    button[0].classList.add("active");
    ingredients[0].innerHTML="Patty";
  } else {
    patty.style.display = "none";
    button[0].classList.remove("active");
    ingredients[0].innerHTML="";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let Cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    Cheese.style.display = "inherit";
    button[0].classList.add("active");
    ingredients[0].innerHTML="Cheese";
  } else {
    Cheese.style.display = "none";
    button[0].classList.remove("active");
    ingredients[0].innerHTML="";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let Tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    Tomatoes.style.display = "inherit";
    button[0].classList.add("active");
    ingredients[0].innerHTML="Tomatoes";
  } else {
    Tomatoes.style.display = "none";
    button[0].classList.remove("active");
    ingredients[0].innerHTML="";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let Onions = document.querySelector("#onion");
  if (state.Onions) {
    Onions.style.display = "inherit";
    button[0].classList.add("active");
    ingredients[0].innerHTML="Onions";
  } else {
    Onions.style.display = "none";
    button[0].classList.remove("active");
    ingredients[0].innerHTML="";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let Lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    Lettuce.style.display = "inherit";
    button[0].classList.add("active");
    ingredients[0].innerHTML="Lettuce";
  } else {
    Lettuce.style.display = "none";
    button[0].classList.remove("active");
    ingredients[0].innerHTML="";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};


// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
if (ingredients[0].innerHTML=="Patty" ){
  wholeWheatBun+= ingredients.Patty;
}





let price=document.getElementById("price-details");
price.innerHTML=wholeWheatBun;
