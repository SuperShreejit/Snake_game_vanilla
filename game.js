import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, hasBitenSelf, getSnakeHead } from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import { isOutOfBounds } from './input.js';

const gameboard = document.querySelector('.gameboard');
let lastRenderTime = 0, 
    gameOver = false;

// runs the main function
function main(currentTime){
  if(gameOver) {
    if(confirm("You lost. Press OK to restart.")) return (window.location = "./index.html");
    else return window.close();
  }
  else {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    update();
    draw();
  }
}

// calls the first frame
window.requestAnimationFrame(main);

// updates the board
function update(){
  updateSnake();
  updateFood();
  checkDeath();
}

// draws on board
function draw(){
  cleanGameboard();
  drawSnake(gameboard);
  drawFood(gameboard);
}

// clears the board
function cleanGameboard(){
  while(gameboard.firstChild){
    gameboard.removeChild(gameboard.firstChild);
  }
}

// checks for death events
function checkDeath() {
  gameOver = isOutOfBounds(getSnakeHead()) || hasBitenSelf();
}