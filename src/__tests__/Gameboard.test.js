import Ship from "../js/Ship";
import Gameboard from "../js/Gameboard";

test.skip("place ship on board", () => {
  let gameBoard = Gameboard();
  gameBoard.placeShip(2, "X", 0, 0);

  expect(gameBoard.getShipLayout()).toEqual([
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

  gameBoard.placeShip(3, "Y", 9, 7);
  expect(gameBoard.getShipLayout()).toEqual([
    [0, 0, , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , , 1],
    [, , , , , , , , , 1],
    [, , , , , , , , , 1],
  ]);
});

test("receive attack until ship sunk", () => {
  let gameBoard = Gameboard();
  gameBoard.placeShip(3, "X", 0, 0);
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(1, 0);
  gameBoard.receiveAttack(2, 0);

  expect(gameBoard.isGameOver()).toBe(true);
});
