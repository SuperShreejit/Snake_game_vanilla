let inputDirection = { x: 0, y: 0 },
  lastInputDirection = { x: 0, y: 0 };
const GRID_SIZE = 21;

// collects keypress events from player
window.addEventListener('keydown', e =>{
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break;
      inputDirection ={x:0,y:-1};
      break;
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break;
      inputDirection ={x:0,y:1};
      break;
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break;
      inputDirection ={x:-1,y:0};
      break;
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break;
      inputDirection ={x:1,y:0};
      break;
  }
});

// gets new direction input
export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

// returns new random grid position
export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  };
}

// checks if the snake went out of bounds or not
export function isOutOfBounds(position) {
  if(position.x < 1 || position.x > GRID_SIZE || 
    position.y < 1 || position.y > GRID_SIZE) 
    { return true; }
  else return false;
}