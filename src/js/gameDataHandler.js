import { addShipHighlightHover } from "./gameboardUI";
// allow player ship placement
// have the "for loop" automatically run in this function
const allowPlayerShipPlacement = (shipName) => {
  let gameboard = document.getElementById("player-setup-gameboard-container");
  let axisButton = document.getElementById("axis-button");
  axisButton.dataset.ship = shipName;
  let setupMessage = document.getElementById("setup-message");

  switch (shipName) {
    case "Carrier":
      setupMessage.textContent = "Place your carrier!";
      addShipHighlightHover(5, axisButton.dataset.axis);

      // enable click to place ship
      // addeventlistener to store ship placement using Gameboard Module
      break;
  }

  let tiles = gameboard.childNodes;
  tiles.forEach((tile) => {
    tile.addEventListener("click", (event) => {
      let x = event.target.dataset.x;
      let y = event.target.dataset.y;
      // store in Player's Gameboard object
      console.log(x + "," + y);
    });
  });
};

export { allowPlayerShipPlacement };
