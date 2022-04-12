import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 4;
const snakeBody = [
  { x: 11, y: 11 }
];
let newSegments = 0;

// updates the snake stats
export function update() {
  addBodySegment();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >=0; i--) {
    snakeBody[i+1] = {...snakeBody[i]};
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

// draws the snake
export function draw(gameboard) {
  snakeBody.forEach(snakeBodySegment=>{
    const snakeElement = document.createElement('div'); 
    snakeElement.style.gridRowStart = snakeBodySegment.y;
    snakeElement.style.gridColumnStart = snakeBodySegment.x;
    snakeElement.classList.add('snake');
    gameboard.appendChild(snakeElement);
  });
}

// checks if the snake has eaten the food or self or nothing
export function doesEats(something, { ignoreHead = false } = {}) {
  return snakeBody.some((snake,index) => {
    if(ignoreHead && index === 0 ) return false;
    return isAtPosition(snake, something);
  });
}

// expands the snake
export function expand(amount) {
  newSegments += amount;
}

// checks if the snake is at the same location of the food or not
function isAtPosition(snakePosition,objectPosition) {
  if (
    snakePosition.x === objectPosition.x &&
    snakePosition.y === objectPosition.y
  )
    return true;
  else return false;
}

// adds new segments to snake body
function addBodySegment() {
  if (newSegments === 0) return;
  else{
    for (let i = 0; i < newSegments; i++) {
      snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments = 0;
  }
}

// returns snake head
export function getSnakeHead() {
  return snakeBody[0];
}

// checks for snake eating itself
export function hasBitenSelf() {
  return doesEats(snakeBody[0], { ignoreHead : true });
}