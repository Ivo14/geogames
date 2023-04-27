const root = document.getElementById('root');

import { countries } from "./capitals.js"


const scrambleDiv = document.createElement('div');
export function hangmanPage(){
    root.replaceChildren();
    root.appendChild(scrambleDiv);
    let streak = 0;
    scrambleDiv.innerHTML = `
    <link rel="stylesheet" href="../style/style.css">
    <div class='center'>
    <h3 id = "name"></h3>
    <input id = "hangmanInput"></input>
    <span id = "streak" style='margin-top:10px;display:block'>Streak: ${streak}</span>
    </div>`;


    eventListener();
    
    function eventListener(){
let arrayforcountrytxt= [];
let countryString = '';
let txtDiv=document.getElementById('name')
let failed=0;
let matches;
let country='';
let game = () =>{
country = countries[Math.floor(Math.random() * countries.length)]
  arrayforcountrytxt[0]=country.name[0]
  for(let i=1;i<country.name.length;i++){
    if(country.name[i].toLowerCase()>='a' && country.name[i].toLowerCase()<='z') arrayforcountrytxt[i]='▢'
  }
    for(let i=1;i<country.name.length;i++){
    if(arrayforcountrytxt[i]==undefined && country.name[i]!='-') {arrayforcountrytxt[i]=' '}
    else if(country.name[i]=='-'){arrayforcountrytxt[i]='-'}
  }
    for(let i=1;i<country.name.length;i++){
    if(arrayforcountrytxt[i-1]==' ' || arrayforcountrytxt[i-1]=='-') {arrayforcountrytxt[i]=country.name[i]}
  }
  for(let i=0;i<arrayforcountrytxt.length;i++){
    countryString+=arrayforcountrytxt[i];
  }
  txtDiv.innerText=countryString;
}
game();
let listener
hangmanInput.addEventListener("input", listener = (k)=>{
    k.preventDefault();
  matches=0;
    for(let i=1;i<country.name.length;i++){
      if(hangmanInput.value==country.name[i]) {arrayforcountrytxt[i]=country.name[i];matches++;}
    }
  if(matches==0) {
    failed++;
  }
  countryString=''
  for(let i=0;i<country.name.length;i++){
    countryString+=arrayforcountrytxt[i]
      }
  txtDiv.innerText=countryString;
  
  if (countryString==country.name) {
    streak++;
    document.getElementById('streak').innerText=`Streak: ${streak}`
    hangmanInput.removeEventListener("input",listener)
    eventListener()
  }
  hangmanInput.value='';
});
}
}