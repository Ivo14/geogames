import {questionArray} from "../utility/resourses.js"

const root = document.getElementById('root');

const questionsDiv = document.createElement('div');
export function questionsPage(){
    root.replaceChildren();
    root.appendChild(questionsDiv);

    questionsDiv.innerHTML = `
    <link rel="stylesheet" href="../style/style.css">
    <div class='center'>
    <h3 id = "name"></h3>
    <div id = "answers" style = "display: block">

    </div>
    <div id = "streak" style='margin-top:10px;display:block'>Streak: 0</div>
    </div>`;

    let streak = 0;

    eventListener();
    
    function eventListener(){
        const el = questionArray[Math.floor(Math.random() * questionArray.length)]
        const question = el.question;
        const answer = el.answer;
          
        document.getElementById("name").textContent = `${question}`;

        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        div2.style.marginTop = "5px";

        document.getElementById("answers").appendChild(div1);
        document.getElementById("answers").appendChild(div2);

        let counter = 0;

        for(let i = 65; i <=68; i++){
            const option = el[`${String.fromCharCode(i)}`];
            const button = document.createElement('button');
            button.style.backgroundColor = 'rgb(102,127,255)'
            button.style.borderStyle = 'solid';
            button.style.borderWidth = '3px';
            button.style.borderRadius = '4px';
            button.style.borderColor = 'rgb(9, 9, 26)';
            button.textContent = `${option}`;
            button.id=String.fromCharCode(i);
            button.style.marginRight = '5px';
            button.style.marginLeft = '5px';
            button.style.width = '200px';
    
            button.addEventListener('click', () =>{
                if(button.id==answer){
                    streak++;
                    document.getElementById('streak').innerText=`Streak: ${streak}`;
                    document.getElementById("answers").replaceChildren()
                    eventListener();
                }else {
                    streak=0;
                    document.getElementById('streak').innerText=`Streak: ${streak}`;
                }
            });

            if(counter < 2){
                div1.appendChild(button);
            }
            else{
                div2.appendChild(button);
            }
            counter++;
        }
}}