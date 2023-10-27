// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const person = prompt("Please enter your name:");

alert(`Nice to meet you ${person}!`);

// Step 2 - Food choice
const foodChoice = prompt(`
What type of food would you like to order?
1 - Pizza
2 - Pasta
3 - Salad
`);

let selectedFood = "";

if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
  alert("Invalid choice. Please select a number between 1 and 3.");
  exit(1);
}

// Step 3 - Subtype
alert(`You've chosen ${selectedFood}`);

let foodType = "";
let foodOptions = [];

switch (selectedFood) {
  case "Pizza":
    foodType = prompt(`Select a Pizza type:
    1 - Napolitana
    2 - Hawaian
    3 - Pepperoni`);
    foodOptions = ["Napolitana", "Hawaian", "Pepperoni"];
    break;

  case "Pasta":
    foodType = prompt(`Select a Pasta type:
    1 - Spaghetti Carbonara
    2 - Fettuccine Alfredo
    3 - Cheesy Tortellini`);
    foodOptions = [
      "Spaghetti Carbonara",
      "Fettuccine Alfredo",
      "Cheesy Tortellini",
    ];
    break;

  case "Salad":
    foodType = prompt(`Select a Salad type:
    1 - Caesar Salad
    2 - Caprese Salad
    3 - Greek Salad`);
    foodOptions = ["Caesar Salad", "Caprese Salad", "Greek Salad"];
    break;

  default:
    alert("Invalid type choice.");
    exit(1);
}

let selectedFoodChoice = "";

if (foodType === "1") {
  selectedFoodChoice = foodOptions[0];
  alert(`You choose ${selectedFoodChoice}`);
} else if (foodType === "2") {
  selectedFoodChoice = foodOptions[1];
  alert(`You choose ${selectedFoodChoice}`);
} else if (foodType === "3") {
  selectedFoodChoice = foodOptions[2];
  alert(`You choose ${selectedFoodChoice}`);
}

// Step 4 - Age
const age = prompt("Is this for a child or an adult? Type your age:");

let orderConfirmation;

if (age >= 18) {
  orderConfirmation =
    prompt(`One adult-sized ${selectedFoodChoice} will be prepared for you. That'll be €15. Are you sure you want to order this?
1 - Yes
2 - No`);
} else if (age < 18) {
  orderConfirmation =
    prompt(`One kid-sized ${selectedFoodChoice} will be prepared for you. That'll be €10. Are you sure you want to order this?
1 - Yes
2 - No`);
} else {
  alert("Invalid choice. Please select a number between 1 and 3.");
}

console.log(selectedFoodChoice);

// Step 5 - Order confirmation
if (orderConfirmation === "1") {
  alert(
    `Thank you for your order! Your delicious meal will be prepared. See you soon! 👋🏼`
  );
} else if (orderConfirmation === "2") {
  alert(`No problem, come back and order anytime you want.`);
} else {
  alert("Invalid choice. Please select 1 for Yes or 2 for a number.");
}
