import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

import { createStartPage, addStartGameButtonEventListeners } from "./messagesUI";
import createGameboard from "./gameboardUI";

let contentContainer = document.createElement("div");
contentContainer.setAttribute("id", "content-container");

contentContainer.appendChild(createStartPage());

// contentContainer.appendChild(createGameboard("player"));
// contentContainer.appendChild(createGameboard("computer"));

document.body.appendChild(contentContainer);

addStartGameButtonEventListeners();

