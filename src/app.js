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
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
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

function renderPatty() {
  let $patty = document.querySelector("#patty");

  if (state.Patty) {
    $patty.style.display = "inherit";
  } else {
    $patty.style.display = "none";
  }
}

function renderCheese() {
  let $cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    $cheese.style.display = "inherit";
  } else {
    $cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let $tomato = document.querySelector("#tomato");
  if (state.Tomato) {
    $tomato.style.display = "inherit";
  } else {
    $tomato.style.display = "none";
  }
}

function renderOnions() {
  let $onion = document.querySelector("#onion");
  if (state.Onion) {
    $onion.style.display = "inherit";
  } else {
    $onion.style.display = "none";
  }
}

function renderLettuce() {
  let $lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    $lettuce.style.display = "inherit";
  } else {
    $lettuce.style.display = "none";
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
  state.Tomato = !state.Tomato;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onion = !state.Onion;
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
