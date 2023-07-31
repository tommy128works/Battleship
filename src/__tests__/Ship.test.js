import Ship from "../js/Ship";

test("ship isSunk function", () => {
  let ship = Ship(4);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);

  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("get length of ship", () => {
  let ship = Ship(3);
  expect(ship.getLength()).toBe(3);
});
