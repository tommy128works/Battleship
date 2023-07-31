import { addShipHighlightHover } from "./gameboardUI";
import Gameboard from "./Gameboard";
import {
  createPlayerSetupPage,
  updateGameboardDisplay,
  createMainGameDisplay,
} from "./gameboardUI";
import ComputerPlayer from "./ComputerPlayer";

let playerGameboard = Gameboard();
let computerGameboard = Gameboard();
let computerAI = ComputerPlayer();

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

        switch (shipName) {
          case "Carrier":
            if (!playerGameboard.placeShip(5, axis, x, y)) {
              return;
            }
            break;
          case "Battleship":
            if (!playerGameboard.placeShip(4, axis, x, y)) {
              return;
            }
            break;
          case "Destroyer":
            if (!playerGameboard.placeShip(3, axis, x, y)) {
              return;
            }
            break;
          case "Submarine":
            if (!playerGameboard.placeShip(3, axis, x, y)) {
              return;
            }
            break;
          case "Patrol Boat":
            if (!playerGameboard.placeShip(2, axis, x, y)) {
              return;
            }
            break;
        }

        contentContainer.innerHTML = "";
        contentContainer.appendChild(createPlayerSetupPage(axis));

        switch (shipName) {
          case "Carrier":
            allowPlayerShipPlacement("Battleship");
            break;
          case "Battleship":
            allowPlayerShipPlacement("Destroyer");
            break;
          case "Destroyer":
            allowPlayerShipPlacement("Submarine");
            break;
          case "Submarine":
            allowPlayerShipPlacement("Patrol Boat");
            break;
          case "Patrol Boat":
            createMainGameDisplay();
            initializeGameLoop();
            return;
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

const initializeGameLoop = () => {
  updateGameboardDisplay(
    "player-gameboard-container",
    playerGameboard.getShipLayout()
  );

  const shipSizes = [5, 4, 3, 3, 2];
  let counter = 0;

  do {
    let [x, y, axis] = computerAI.getRandomShipPlacement();

    if (computerGameboard.placeShip(shipSizes[counter], axis, x, y)) {
      counter++;
    }
  } while (counter < shipSizes.length);
  // display it for development purposes
  // updateGameboardDisplay(
  //   "computer-gameboard-container",
  //   computerGameboard.getShipLayout()
  // );
  

  mainGameLoop();
};

const mainGameLoop = () => {
  let computerBoardDOM = document.getElementById(
    "computer-gameboard-container"
  );
  let computerTiles = computerBoardDOM.childNodes;
  
  computerTiles.forEach((tile) => {
    tile.addEventListener("click", (event) => {
      let x = event.target.dataset.x;
      let y = event.target.dataset.y;

      computerGameboard.receiveAttack(x, y);
      updateGameboardDisplay(
        "computer-gameboard-container",
        null,
        computerGameboard.getBoardActivity()
      );

      // immediately generate enemy attack
      // update player's gameboard
      [x, y] = computerAI.makeAttack();
      playerGameboard.receiveAttack(x, y);
      updateGameboardDisplay(
        "player-gameboard-container",
        null,
        playerGameboard.getBoardActivity()
      );

    });
  });

  // at the end, check conditions for game over
  // if game over, display winner message and reset button
};

export { allowPlayerShipPlacement, addAxisButtonEventListeners };
