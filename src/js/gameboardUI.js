const BOARD_SIZE = 10;

const addShipHighlightHover = (shipLength, axis) => {
  let gameboard = document.getElementById("player-setup-gameboard-container");
  let tiles = gameboard.childNodes;

  tiles.forEach((tile) => {
    let highlightGroup = [];
    let currentNode = tile;

    for (let i = 0; i < shipLength; i++) {
      highlightGroup.push(currentNode);
      if (currentNode.nextSibling) {
        currentNode = currentNode.nextSibling;
      }
    }

    // then search for relevant tiles using document.Query using the data-x and data-y coordinates
    // then add the eventlisteners below on them
    // check for edge case in which the ship doesn't fit on the board
    // those will just highlight red with the remaining tiles

    tile.addEventListener("mouseover", (event) => {
      highlightGroup.forEach((element) => {
        element.classList.add("ship-setup-valid");
      })
    })

    tile.addEventListener("mouseout", (event) => {
      highlightGroup.forEach((element) => {
        element.classList.remove("ship-setup-valid");
      })
    })



  });
}

// allow player ship placement
// have the "for loop" automatically run in this function
const allowPlayerShipPlacement = (shipName) => {
  let gameboard = document.getElementById("player-setup-gameboard-container");
  let axisButton = document.getElementById("axis-button");
  let setupMessage = document.getElementById("setup-message");
  let tiles = gameboard.childNodes;

  switch (shipName) {
    case "Carrier":
      setupMessage.textContent = "Place your carrier!";
      // gameboard.dataset.shipLength = 5;

      // enable hover with length of 5
      addShipHighlightHover(5, "X");



      // allow user to rotate ship based on current axisbutton
      // enable click to place ship
      // addeventlistener to place ship using Gameboard Module
      break;
  }



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

const createPlayerSetupPage = () => {
  let container = document.createElement("div");
  container.setAttribute("id", "player-setup-page");

  container.appendChild(createGameboard("player-setup"));

  let axisButton = document.createElement("button");
  axisButton.setAttribute("id", "axis-button");
  axisButton.textContent = "AXIS: X";
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

export { createGameboard, createPlayerSetupPage, allowPlayerShipPlacement };
