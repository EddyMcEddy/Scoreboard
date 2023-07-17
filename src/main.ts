import "./style.css";
//import typescriptLogo from "./typescript.svg";
//import viteLogo from "/vite.svg";
//import { setupCounter } from "./counter.ts";

let firstTeamScore = 0;

const firstTeamScoreboard = document.querySelector(".team1 h3");
const firstTeamDelete = document.querySelector(".team1 i.subtract");
const firstTeamAdd = document.querySelector(".team1 i.add");
const firstTeamName = document.querySelector(".team1 h2");
const firstTeamNameInput = document.querySelector("team1 input");

function handleClickOnTeamOneAdd() {
  if (firstTeamScore >= 21) {
    return;
  }

  firstTeamScore++;

  if (firstTeamScoreboard) {
    firstTeamScoreboard.textContent = `${firstTeamScore}`;
  }

  if (firstTeamScore >= 21) {
    window.alert("Team 1 is the winner!");
  }
}

function handleClickOnDeleteTeamOne() {
  if (firstTeamScore <= 0) {
    return;
  }
  firstTeamScore--;

  if (firstTeamScoreboard) {
    firstTeamScoreboard.textContent = `${firstTeamScore}`;
  }
}

function teamOneNameUserInput(event: any) {
  const inputNameChange = event.target;

  if (inputNameChange instanceof HTMLInputElement) {
    const newInput = inputNameChange.value;

    if (firstTeamName) {
      firstTeamName.textContent = newInput;
    }
  }
}

let secondTeamScore = 0;

const secondTeamScoreboard = document.querySelector(".team2 h3");
const secondTeamAdd = document.querySelector(".team2 i.add");
const secondTeamDelete = document.querySelector(".team2 i.subtract");
const secondTeamName = document.querySelector(".team2 h2");
const secondTeamNameInput = document.querySelector(".team2 input");

const resetButton = document.querySelector(".resetbutton");

function handleClcikOnTeamTwoAdd() {
  if (secondTeamScore >= 21) {
    return;
  }

  secondTeamScore++;

  if (secondTeamScoreboard) {
    secondTeamScoreboard.textContent = `${secondTeamScore}`;
  }

  if (secondTeamScore >= 21) {
    window.alert("Team 2 won!");
  }
}

function handleClickOnTeamTwoDelete() {
  if (secondTeamScore <= 0) {
    return;
  }
  secondTeamScore--;

  if (secondTeamScoreboard) {
    secondTeamScoreboard.textContent = `${secondTeamScore}`;
  }
}

function teamTwoNameInput(event: any) {
  const nameInputChange = event.target;

  if (nameInputChange instanceof HTMLInputElement) {
    const newInput = nameInputChange.value;

    if (secondTeamScoreboard) {
      secondTeamScoreboard.textContent = newInput;
    }
  }
}

function HandleClickOnReset() {
  firstTeamScore = 0;
  secondTeamScore = 0;

  if (firstTeamScoreboard) {
    firstTeamScoreboard.textContent = `${secondTeamScore}`;
  }

  if (secondTeamScoreboard) {
    secondTeamScoreboard.textContent = `${firstTeamScore}`;
  }

  if (firstTeamName) {
    firstTeamName.textContent = "Team 1";
  }

  if (secondTeamName) {
    secondTeamName.textContent = "Team 2";
  }
}

firstTeamAdd?.addEventListener("click", handleClickOnTeamOneAdd);
firstTeamDelete?.addEventListener("click", handleClickOnDeleteTeamOne);
firstTeamNameInput?.addEventListener("click", teamOneNameUserInput);
secondTeamAdd?.addEventListener("click", handleClcikOnTeamTwoAdd);
secondTeamDelete?.addEventListener("click", handleClickOnTeamTwoDelete);
secondTeamNameInput?.addEventListener("click", teamTwoNameInput);
resetButton?.addEventListener("click", HandleClickOnReset);

//**** VIDEO TYPESCRIPT AND DOM !!!!! Look for answers on code that helped */
//const firstListItem = document.querySelector("h3");

//function handleClickAdd(event: MouseEvent) {
//const thingClickedOn = event.target;

//if (thingClickedOn instanceof HTMLHeadingElement) {
//if (thingClickedOn.classList.contains("taken")) {
//console.log("nope!");
// return;
// }

//thingClickedOn.textContent = currentPlayer;
//This code allows one time click and once the USER has clicked on item it will not allow a double click
//thingClickedOn.classList.add("taken");

// if (currentPlayer === "x") {
//  currentPlayer = "o";
//} else {
// currentPlayer = "x";
//}

//Increment Moves counter
//moveCounter++;

//const teamNumber = document.querySelector("h3");
//if (teamNumber instanceof HTMLHeadingElement) {
//  teamNumber.textContent = `Score ${moveCounter} of Team `;
//}
//}
//}

//firstListItem?.addEventListener("click", handleClickAdd);

////const bothAdds = document.querySelectorAll("h3");

//bothAdds.forEach((add) => add.addEventListener("click", handleClickAdd));

//document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//<div>
//<a href="https://vitejs.dev" target="_blank">
//<img src="${viteLogo}" class="logo" alt="Vite logo" />
//</a>
//<a href="https://www.typescriptlang.org/" target="_blank">
//<img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//</a>
//<h1>Vite + TypeScript</h1>
//<div class="card">
// <button id="counter" type="button"></button>
//</div>
//<p class="read-the-docs">
// Click on the Vite and TypeScript logos to learn more
//</p>
//</div>
//`;

//setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
