function createArray(length) {
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
}

const Gameboard = () => {
  let board = createArray(4, 4);

  const getBoard = () => board;

  // store missed shots as X

  // place ship coords and you need the length
  // assume ship placement is top to bottom, or left to right
  let ships = [];
  let shipCount = 0;
  // how to know if coords belong to a ship? use indexing 0, 1
  const placeShip = (ship, axis, x, y) => {
    ships[shipCount] = ship;
    if (axis === "X") {
      for (let i = 0; i < ship.getLength(); i++) {
        board[y][x + i] = shipCount;
      }
    } else if (axis === "Y") {
      for (let i = 0; i < ship.getLength(); i++) {
        board[y + i][x] = shipCount;
      }
    }
    shipCount++;
  };

  // receiveAttack function
  // check input and ship coords to determine if hit

  // check if all ships have been sunk
  // needs to keep track of ships

  return { getBoard, placeShip };
};

export default Gameboard;
