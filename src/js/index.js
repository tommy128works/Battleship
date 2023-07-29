import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

import {
  createStartPage,
  addStartGameButtonEventListeners,
} from "./messagesUI";
// import { createGameboard } from "./gameboardUI";
import Gameboard from "./Gameboard";
import ComputerPlayer from "./ComputerPlayer";

let contentContainer = document.createElement("div");
contentContainer.setAttribute("id", "content-container");

contentContainer.appendChild(createStartPage());
document.body.appendChild(contentContainer);

addStartGameButtonEventListeners();

// contentContainer.appendChild(createGameboard("player"));
// contentContainer.appendChild(createGameboard("computer"));

let playerGameboard = Gameboard();
