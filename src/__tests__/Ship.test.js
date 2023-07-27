import Ship from "./Ship";

test("ship has sunk", () => {
  let ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("get length of ship", () => {
  let ship = Ship(3);
  expect(ship.getLength()).toBe(3);
});
