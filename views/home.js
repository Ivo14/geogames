import { html, render } from "../node_modules/lit-html/lit-html.js";
import { changeAppearance } from "../utility/appearance.js";
const root = document.getElementById('root');

const geographyArray = [['Capitals',"../images/capitals.png","capitals"], ['Flags',"../images/flags.png","flags"],['Flagsabcd',"../images/flags.png","flagsabcd"], ['Description',"../images/description.png","description"], ['Scramble',"../images/scramble.png","scramble"], ['True or false',"../images/trueorfalse.png","trueorfalse"], ['Hangman',"../images/hangman.png","hangman"], ['Map Location',"../images/maplocation.png","maplocation"]];
const otherArray = [['Tic Tac Toe',"../images/ttt.png","ttt"], ['Connect4',"../images/connect4.png","connect4"], ['Questions',"../images/questions.png","questions"], ['Typeracer',"../images/typeracer.png","typeracer"]];

const appearence = {
  ligthTheme: [],
  darkTheme: []
}

const cardTemplate = (game) => html`
${localStorage.darkTheme ? 
html`
<a style = "margin-left:10px; margin-right:10px" href="/${game[2]}">
<button style="border-style: solid; border-width: 5px;  border-color: rgb(9, 9, 26); border-radius: 10px; background-color:rgb(11, 11, 26)">
  <img src="${game[1]}" style="width: 120px; height: 120px;border-radius: 5px; margin-top: 3px">
  <div class="container">
    <h4 style="text-align: center; color:rgb(100, 100, 185)"><b>${game[0]}</b></h4>
  </div>
</button>
</a>
<link rel="stylesheet" href="../style/style.css">` :
html`
<a style = "margin-left:10px; margin-right:10px" href="/${game[2]}">
<button style="border-style: solid; border-width: 5px;  border-color: rgb(180, 248, 250); border-radius: 10px; background-color:rgb(209, 254, 255)">
  <img src="${game[1]}" style="width: 120px; height: 120px;border-radius: 5px; margin-top: 3px">
  <div class="container">
    <h4 style="text-align: center; color:rgb(100, 100, 185)"><b>${game[0]}</b></h4>
  </div>
</button>
</a>
<link rel="stylesheet" href="../style/style.css">`}

`;

export function homePage() {
    root.replaceChildren();

    const mainDiv = document.createElement('div');
    mainDiv.style.display = "flex";
    mainDiv.className = 'flex-container';

    const geographyDiv = document.createElement('div');
    geographyDiv.className = 'flex-container';
    geographyDiv.style.marginLeft = "auto";
    geographyDiv.style.marginRight = "auto";

    const geographyHeading = document.createElement('h3');
    geographyHeading.textContent = "Geography games";
    geographyHeading.style.textAlign = "center";
    geographyHeading.style.color = "rgb(100, 100, 185)";

    root.appendChild(geographyHeading);
    root.appendChild(mainDiv);
    mainDiv.appendChild(geographyDiv);
    render(geographyArray.map(game => cardTemplate(game)), geographyDiv);

    const mainDivTwo = document.createElement('div');
    mainDivTwo.style.display = "flex";
    mainDivTwo.className = 'flex-container';

    const otherDiv = document.createElement('div');
    otherDiv.className = 'flex-container';
    otherDiv.style.marginLeft = "auto";
    otherDiv.style.marginRight = "auto";

    const otherHeading = document.createElement('h3');
    otherHeading.textContent = "Other games";
    otherHeading.style.textAlign = "center";
    otherHeading.style.color = "rgb(100, 100, 185)";

    root.appendChild(otherHeading);
    root.appendChild(mainDivTwo);
    mainDivTwo.appendChild(otherDiv);
    render(otherArray.map(game => cardTemplate(game)), otherDiv);

    document.getElementById("appearance").onclick = homeEvent;

    function homeEvent(){
      changeAppearance();
      if(document.getElementById("appearance").textContent == "☀"){
        document.getElementById("appearance").textContent = "☽"
      }
      else{
        document.getElementById("appearance").textContent = "☀"
      }
      render(geographyArray.map(game => cardTemplate(game)), geographyDiv);
      render(otherArray.map(game => cardTemplate(game)), otherDiv);
    }
}

