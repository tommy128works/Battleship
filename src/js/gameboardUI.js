const BOARD_SIZE = 10;

// create function that allows player to hover ships above board

const createGameSetupModalBox = () => {
  // create modal box that sets up player's board here
};

const createGameboard = (id) => {
  let container = document.createElement("div");

  let name = document.createElement("h1");
  name.textContent = id.toUpperCase();
  container.appendChild(name);

  let gameboardContainer = document.createElement("div");
  gameboardContainer.setAttribute("id", id + "-gameboard-container");
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

export { createGameboard, createGameSetupModalBox };
