import { html, render } from "../node_modules/lit-html/lit-html.js"

const root = document.querySelector('body');

const geographyArray = [['Capitals',"../images/capitals.png","capitals"], ['Flag',"../images/flags.png","flag"], ['Description',"../images/description.png","description"], ['Scramble',"../images/scramble.png","scramble"], ['True or false',"../images/trueorfalse.png","trueorfalse"], ['Hangman',"../images/hangman.png","hangman"], ['Map Location',"../images/maplocation.png","maplocation"]];
const otherArray = ['ttt', 'Connect4', 'Questions', 'Typeracer', 'Lichess'];


const cardTemplate = (game) => html`
<a href="/${game[2]}">
<button style="border-style: solid; border-width: 4px; border-color: black; border-width: 5px; border-radius: 5px">
  <img src="${game[1]}" style="width: 100px; height: 100px;border-radius: 5px; margin-top: 3px">
  <div class="container">
    <h4 style="text-align: center"><b>${game[0]}</b></h4>
  </div>
</button>
</a>
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
    geographyDiv.appendChild(geographyHeading);


    const otherDiv = document.createElement('div');

    root.appendChild(mainDiv);
    mainDiv.appendChild(geographyDiv);
    mainDiv.appendChild(otherDiv);

    render(geographyArray.map(game => cardTemplate(game)), geographyDiv);
}