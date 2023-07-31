import { addShipHighlightHover } from "./gameboardUI";
import Gameboard from "./Gameboard";
import { createPlayerSetupPage, updateGameboardDisplay } from "./gameboardUI";

let playerGameboard = Gameboard();

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
      break;
    case "Battleship":
      setupMessage.textContent = "Place your battleship!";
      addShipHighlightHover(4, axisButton.dataset.axis);
      break;
    case "Destroyer":
      setupMessage.textContent = "Place your destroyer!";
      addShipHighlightHover(3, axisButton.dataset.axis);
      break;
    case "Submarine":
      setupMessage.textContent = "Place your submarine!";
      addShipHighlightHover(3, axisButton.dataset.axis);
      break;
    case "Patrol Boat":
      setupMessage.textContent = "Place your patrol boat!";
      addShipHighlightHover(2, axisButton.dataset.axis);
      break;
  }

  let tiles = gameboard.childNodes;
  let contentContainer = document.getElementById("content-container");
  tiles.forEach((tile) => {
    tile.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("ship-setup-valid") &&
        !event.target.classList.contains("player-ship-tile")
      ) {
        let x = parseInt(event.target.dataset.x);
        let y = parseInt(event.target.dataset.y);

        contentContainer.innerHTML = "";
        contentContainer.appendChild(createPlayerSetupPage(axis));

        switch (shipName) {
          case "Carrier":
            playerGameboard.placeShip(5, axis, x, y);
            allowPlayerShipPlacement("Battleship");
            break;
          case "Battleship":
            playerGameboard.placeShip(4, axis, x, y);
            allowPlayerShipPlacement("Destroyer");
            break;
          case "Destroyer":
            playerGameboard.placeShip(3, axis, x, y);
            allowPlayerShipPlacement("Submarine");
            break;
          case "Submarine":
            playerGameboard.placeShip(3, axis, x, y);
            allowPlayerShipPlacement("Patrol Boat");
            break;
          case "Patrol Boat":
            playerGameboard.placeShip(2, axis, x, y);
            // transition to main game loop
            break;
        }

        addAxisButtonEventListeners();
        updateGameboardDisplay(
          "player-setup-gameboard-container",
          playerGameboard.getShipLayout()
        );
      }
    });
  });
};

const addAxisButtonEventListeners = () => {
  let axisButton = document.getElementById("axis-button");
  let contentContainer = document.getElementById("content-container");
  let axis = axisButton.dataset.axis;
  let ship = axisButton.dataset.ship;

  axisButton.addEventListener("click", (event) => {
    contentContainer.innerHTML = "";
    if (axis === "X") {
      contentContainer.appendChild(createPlayerSetupPage("Y"));
    } else {
      contentContainer.appendChild(createPlayerSetupPage("X"));
    }
    allowPlayerShipPlacement(ship);
    updateGameboardDisplay(
      "player-setup-gameboard-container",
      playerGameboard.getShipLayout()
    );
    addAxisButtonEventListeners();
  });
};

export { allowPlayerShipPlacement, addAxisButtonEventListeners };
