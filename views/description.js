const root = document.getElementById('root');
const descriptionDiv = document.createElement('div');
import { countries } from "./maplocation.js"

export function descriptionPage(){
    root.replaceChildren();
    root.appendChild(descriptionDiv);

    descriptionDiv.innerHTML = `
    <link rel="stylesheet" href="../style/style.css">
    <div class='center'>
    <h3 id = "name"></h3>
    <input id = "descriptionInput"></input>
    <span id = "streak" style='margin-top:10px;display:block'>Streak: 0</span>
    </div>`;

    let streak = 0;

    eventListener();
    
    function eventListener(){
        let country = countries[Math.floor(Math.random() * countries.length)];

        document.getElementById("name").innerText = `${country.description}`;
        document.getElementById("streak").innerText = `Streak: ${streak}`;


        const descriptionInput = document.getElementById("descriptionInput");
        let myListener;
        descriptionInput.addEventListener("input", myListener = (event) => {
        if(descriptionInput.value.toLowerCase() == country["name"].toLowerCase()){
            event.preventDefault();
            streak++;
            descriptionInput.value = "";
            descriptionInput.removeEventListener('input', myListener);
            eventListener()
        }
    });
    }
}