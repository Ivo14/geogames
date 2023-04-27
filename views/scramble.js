const root = document.getElementById('root');
import {countries} from './capitals.js'


const scrambleDiv = document.createElement('div');
export function scramblePage(){
    root.replaceChildren();
    root.appendChild(scrambleDiv);

    scrambleDiv.innerHTML = `
    <link rel="stylesheet" href="../style/style.css">
    <div class='center'>
    <h3 id = "name"></h3>
    <input id = "scrambleInput"></input>
    <span id = "streak" style='margin-top:10px;display:block'>Streak: 0</span>
    </div>`;

    let streak = 0;

    eventListener();
    
    function eventListener(){
        let country = countries[Math.floor(Math.random() * countries.length)];
        function scrambleString(string) {
            var charArray = string.split('');
            for (var i = charArray.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = charArray[i];
              charArray[i] = charArray[j];
              charArray[j] = temp;
            }
            var scrambledString = charArray.join('');
            return scrambledString;
        }
        let scrambledCountry = scrambleString(country.name);
        document.getElementById("name").innerText = `${scrambledCountry}`;
        document.getElementById("streak").innerText = `Streak: ${streak}`;


        const capitalsInput = document.getElementById("scrambleInput");
        let myListener;
        capitalsInput.addEventListener("input", myListener = (event) => {
        if(capitalsInput.value.toLowerCase() == country["name"].toLowerCase()){
            event.preventDefault();
            streak++;
            capitalsInput.value = "";
            capitalsInput.removeEventListener('input', myListener);
            eventListener()
        }
    });
    }
}