import { createPlayerSetupPage } from "./gameboardUI";

const displayPlayerSetUpPage = () => {
  let contentContainer = document.getElementById("content-container");

  contentContainer.innerHTML = "";
  contentContainer.appendChild(createPlayerSetupPage());
}

const addStartGameButtonEventListeners = () => {
  let startGameButton = document.getElementById("start-game-button");

  startGameButton.addEventListener("click", displayPlayerSetUpPage);
};

const createStartPage = () => {
  let container = document.createElement("div");
  container.setAttribute("id", "start-page");

  let title = document.createElement("h1");
  title.textContent = "Welcome to Battleship!";
  container.appendChild(title);

  let message = document.createElement("div");
  message.textContent = "Play a game of Battleship against a computer!";
  container.appendChild(message);

  message = document.createElement("div");
  message.textContent = "Begin by clicking START GAME to set up your ships!";
  container.appendChild(message);

  let startGameButton = document.createElement("button");
  startGameButton.textContent = "START GAME";
  startGameButton.setAttribute("id", "start-game-button");
  container.appendChild(startGameButton);

  return container;
};

export { createStartPage, addStartGameButtonEventListeners };
