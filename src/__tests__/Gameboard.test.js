import Ship from "./Ship";
import Gameboard from "./Gameboard";

test("place ship on board", () => {
  let gameBoard = Gameboard();
  gameBoard.placeShip(2, "X", 0, 0);

  expect(gameBoard.getBoard()).toEqual([
    [0, 0, , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
  ]);
});

test("receive attack until ship sunk", () => {
  let gameBoard = Gameboard();
  gameBoard.placeShip(3, "X", 0, 0);
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(0, 1);
  gameBoard.receiveAttack(0, 2);

  expect(gameBoard.isGameOver()).toBe(true);
});
