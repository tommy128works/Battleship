const BOARD_SIZE = 10;
import { allowPlayerShipPlacement } from "./gameDataHandler";

const addShipHighlightHover = (shipLength, axis) => {
  let gameboard = document.getElementById("player-setup-gameboard-container");
  let tiles = gameboard.childNodes;

  tiles.forEach((tile) => {
    let x = parseInt(tile.dataset.x);
    let y = parseInt(tile.dataset.y);

    let shipGroup = [];
    let currentNode = tile;

    if (axis === "X") {
      for (let i = 0; i < shipLength; i++) {
        shipGroup.push(currentNode);
        if (x > BOARD_SIZE - shipLength) {
          break;
        }
        currentNode = currentNode.nextSibling;
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        shipGroup.push(currentNode);
        if (y > BOARD_SIZE - shipLength) {
          break;
        }
        currentNode = tiles[(y + i + 1) * 10 + x];
      }
    }

    tile.addEventListener("mouseover", (event) => {
      shipGroup.forEach((element) => {
        if (shipGroup.length < shipLength) {
          element.classList.add("ship-setup-invalid");
        } else {
          element.classList.add("ship-setup-valid");
        }
      });
    });

    tile.addEventListener("mouseout", (event) => {
      shipGroup.forEach((element) => {
        if (shipGroup.length < shipLength) {
          element.classList.remove("ship-setup-invalid");
        } else {
          element.classList.remove("ship-setup-valid");
        }
      });
    });
  });
};


// can create a dummy shipLayout data here
// THIS FUNCTION IS PAUSED FOR NOW UNTIL IT IS NEEDED
const updateGameboardDisplay = (
  gameboardId,
  shipLayout = null,
  boardActivity = null
) => {
  // for player setup, only update using shipLayout

  // receive updated shipLayout and update gameboard
  let gameboard = document.getElementById(gameboardId);

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      // delete all tiles then create it
      // OR toggle classes of each one
      let tile = document.querySelector(`[data-x="${j}"][data-y="${i}"]`);

      if (shipLayout[j][i] !== "") {
        tile.classList.add("player-ship-tile");
      }
    }
  }
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
    addAxisButtonEventListeners();
  });
};

const createPlayerSetupPage = (axis) => {
  let container = document.createElement("div");
  container.setAttribute("id", "player-setup-page");

  container.appendChild(createGameboard("player-setup"));

  let axisButton = document.createElement("button");
  axisButton.setAttribute("id", "axis-button");
  axisButton.textContent = "AXIS: " + axis;
  axisButton.dataset.axis = axis;
  container.appendChild(axisButton);

  let setupMessage = document.createElement("div");
  setupMessage.setAttribute("id", "setup-message");
  container.appendChild(setupMessage);

  return container;
};

const createGameboard = (gameboardId) => {
  let container = document.createElement("div");

  let name = document.createElement("h1");
  name.textContent = gameboardId.toUpperCase();
  container.appendChild(name);

  let gameboardContainer = document.createElement("div");
  gameboardContainer.setAttribute("id", gameboardId + "-gameboard-container");
  gameboardContainer.classList.add("game-board-container");

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      let tile = document.createElement("div");
      tile.dataset.x = j;
      tile.dataset.y = i;
      gameboardContainer.appendChild(tile);
    }
  }

  container.appendChild(gameboardContainer);

  return container;
};

export {
  createGameboard,
  createPlayerSetupPage,
  addAxisButtonEventListeners,
  addShipHighlightHover,
};
