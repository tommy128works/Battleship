import { createPlayerSetupPage } from "./gameboardUI";
import {
  allowPlayerShipPlacement,
  addAxisButtonEventListeners,
  resetGameData,
} from "./gameDataHandler";

const displayPlayerSetUpPage = () => {
  let contentContainer = document.getElementById("content-container");

  contentContainer.innerHTML = "";
  contentContainer.appendChild(createPlayerSetupPage("X"));
  allowPlayerShipPlacement("Carrier");
  addAxisButtonEventListeners();
};

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

const createGameOverMessage = (winnerString) => {
  let container = document.createElement("div");
  container.classList.add("game-over-container");

  let message = document.createElement("div");
  message.textContent = winnerString + " has won!";
  container.appendChild(message);

  let resetButton = document.createElement("button");
  resetButton.setAttribute("id", "reset-button");
  resetButton.textContent = "RESET GAME";
  container.appendChild(resetButton);

  return container;
};

const addResetButtonEventListeners = () => {
  let resetButton = document.getElementById("reset-button");
  let gameOverContainer = document.querySelector(".game-over-container");
  resetButton.addEventListener("click", (event) => {
    gameOverContainer.remove();
    resetGameData();
    displayPlayerSetUpPage();
  });
};

export {
  createStartPage,
  addStartGameButtonEventListeners,
  createGameOverMessage,
  addResetButtonEventListeners,
};
