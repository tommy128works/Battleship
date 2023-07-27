const BOARD_SIZE = 10;

import Ship from "../js/Ship";

const createBoardArray = () => {
  let array = new Array(BOARD_SIZE);

  for (let i = 0; i < BOARD_SIZE; i++) {
    array[i] = new Array (BOARD_SIZE);
  }

  return array;
}

// create 2D array that stores shipsArray indices where the ships lay
// create another 2D array to store where hits and misses are

// things to store: hits, missed hits, ships
// if ship isSunk, then scan 2D array and display

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
      for (let i = 0; i < length; i++) {
        shipLayout[y][x + i] = shipCount;
      }
    } else if (axis === "Y") {
      for (let i = 0; i < length; i++) {
        shipLayout[y + i][x] = shipCount;
      }
    }
    shipCount++;
  };

  const receiveAttack = (x, y) => {
    if (shipLayout[y][x] === "") {
      boardActivity[y][x] = "miss";
    } else {
      boardActivity[y][x] = "hit";
      let shipIndex = shipLayout[y][x];
      shipsArray[shipIndex].hit();
    }
  };









  // check if all ships have been sunk
  // needs to keep track of ships
  const isGameOver = () => {
    let allSunk = true;
    for (let i = 0; i < shipCount; i++) {
      if (shipsArray[i].isSunk() === false) {
        allSunk = false;
      }
    }
    if (allSunk === true) {
      return true;
    }
  };

  return { getShipLayout, getBoardActivity, placeShip, receiveAttack, isGameOver };
};

export default Gameboard;
