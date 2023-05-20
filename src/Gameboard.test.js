import Ship from "./Ship";
import Gameboard from "./Gameboard";

test("place ship on board", () => {
  let ship = Ship(2);
  let gameBoard = Gameboard();
  gameBoard.placeShip(ship, "X", 0, 0);
  expect(gameBoard.getBoard()).toEqual([
    [0, 0, ,],
    [, , ,],
    [, , ,],
    [, , ,],
  ]);
});
