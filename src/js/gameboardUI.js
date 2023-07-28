const BOARD_SIZE = 10;

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

export { createGameboard, createPlayerSetupPage };
