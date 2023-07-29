import { addShipHighlightHover } from "./gameboardUI";
import Gameboard from "./Gameboard";
import {
  createPlayerSetupPage,
  addAxisButtonEventListeners,
  updateGameboardDisplay,
} from "./gameboardUI";

let playerGameboard = Gameboard();

// allow player ship placement
// have the "for loop" automatically run in this function
const allowPlayerShipPlacement = (shipName) => {
  let gameboard = document.getElementById("player-setup-gameboard-container");
  let axisButton = document.getElementById("axis-button");
  axisButton.dataset.ship = shipName;
  let axis = axisButton.dataset.axis;
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
  let contentContainer = document.getElementById("content-container");
  tiles.forEach((tile) => {
    tile.addEventListener("click", (event) => {
      if (event.target.classList.contains("ship-setup-valid")) {
        let x = parseInt(event.target.dataset.x);
        let y = parseInt(event.target.dataset.y);
        // store in Player's Gameboard object
        console.log(x + "," + y); // development only

        contentContainer.innerHTML = "";
        contentContainer.appendChild(createPlayerSetupPage(axis));

        switch (shipName) {
          case "Carrier":
            allowPlayerShipPlacement("Battleship");
            playerGameboard.placeShip(5, axis, x, y);
            break;
        }

        addAxisButtonEventListeners();
        updateGameboardDisplay(
          "player-setup-gameboard-container",
          playerGameboard.getShipLayout()
        );

        // console.log(playerGameboard.getShipLayout()); // development only
      }

      // update tiles appearance and change ship
      // probably best to empty content-container and load page
    });
  });
};

export { allowPlayerShipPlacement };
