function createArray(length) {
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
}

// need to use array.some, array.forEach, and if statements
// to check coords then use .hit on the ship hm
// needs to let each ship store its own coords
// but board can store missed shots 

const Gameboard = () => {
  let board = createArray(10, 10);
  const getBoard = () => board;

  let ships = [];
  let shipCount = 0;
  const placeShip = (length, axis, x, y) => {
    ships[shipCount] = Ship(length);
    if (axis === "X") {
      for (let i = 0; i < length; i++) {
        board[y][x + i] = shipCount;
      }
    } else if (axis === "Y") {
      for (let i = 0; i < length; i++) {
        board[y + i][x] = shipCount;
      }
    }
    shipCount++;
  };

  // check input and ship coords to determine if hit
  const receiveAttack = (x, y) => {
    if (board[y][x] === "") {
      board[y][x] = "X";
    } else {
      // it's a hit and i need to call the correct ship's hit()
      board[y][x] = "O";
      ships[board[y][x]].hit();
    }
  };

  // check if all ships have been sunk
  // needs to keep track of ships
  const isGameOver = () => {
    let allSunk = true;
    for (let i = 0; i < shipCount; i++) {
      if (ships[i].isSunk() === false) {
        allSunk = false;
      }
    }
    if (allSunk === true) {
      return true;
    }
  };

  return { getBoard, placeShip, receiveAttack, isGameOver };
};

export default Gameboard;
