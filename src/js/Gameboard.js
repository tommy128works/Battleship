const BOARD_SIZE = 10;

import Ship from "../js/Ship";

const createBoardArray = () => {
  let array = new Array(BOARD_SIZE);

  for (let i = 0; i < BOARD_SIZE; i++) {
    array[i] = new Array(BOARD_SIZE);
  }

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      array[j][i] = null;
    }
  }

  return array;
};

const Gameboard = () => {
  let shipLayout = createBoardArray();
  let boardActivity = createBoardArray();
  let shipsArray = [];
  let shipCount = 0;

  // this demonstrates that i === y-axis and j === x-axis
  // let count = 0;
  // for (let i = 0; i < BOARD_SIZE; i++) {
  //   for (let j = 0; j < BOARD_SIZE; j++) {
  //     board[i][j] = count;
  //     count++;
  //   }
  // }

  const getShipLayout = () => shipLayout;
  const getBoardActivity = () => boardActivity;

  const placeShip = (length, axis, x, y) => {
    shipsArray.push(Ship(length));

    if (axis === "X") {
      if (x + length > BOARD_SIZE) {
        return false;
      }
      for (let i = 0; i < length; i++) {
        if (shipLayout[y][x + i] !== null) {
          return false;
        }
      }
      for (let i = 0; i < length; i++) {
        shipLayout[y][x + i] = shipCount;
      }
    } else if (axis === "Y") {
      if (y + length > BOARD_SIZE) {
        return false;
      }
      for (let i = 0; i < length; i++) {
        if (shipLayout[y + i][x] !== null) {
          return false;
        }
      }
      for (let i = 0; i < length; i++) {
        shipLayout[y + i][x] = shipCount;
      }
    }
    shipCount++;
    return true;
  };

  const receiveAttack = (x, y) => {
    if (shipLayout[y][x] === "") {
      boardActivity[y][x] = "miss";
    } else {
      boardActivity[y][x] = "hit";
      let shipIndex = shipLayout[y][x];
      shipsArray[shipIndex].hit();

      // if statement: if ship has sunk, traverse boardActivity and replace the "hit" with "sunk"
    }
  };

  const isGameOver = () => {
    let isAllSunk = true;
    for (let i = 0; i < shipCount; i++) {
      if (shipsArray[i].isSunk() === false) {
        isAllSunk = false;
      }
    }
    return isAllSunk;
  };

  return {
    getShipLayout,
    getBoardActivity,
    placeShip,
    receiveAttack,
    isGameOver,
  };
};

export default Gameboard;
