import { expand as expandSnake, doesEats as isEaten} from "./snake.js";
import { randomGridPosition as randomPosition } from "./input.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 2;

// relocates new food, if snake eats the last food and expands the snake
export function update() {
  if (isEaten(food)){
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

// draws the food on board
export function draw(gameboard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameboard.appendChild(foodElement);
}

// sets the new food position
function getRandomFoodPosition() {
  let newFoodPosition;
  while(newFoodPosition == null || isEaten(newFoodPosition)){
    newFoodPosition = randomPosition();
  }
  return newFoodPosition;
}
