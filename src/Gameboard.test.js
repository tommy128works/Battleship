import Gameboard from "./Gameboard";

test("ship has sunk", () => {
  let ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

