const root = document.getElementById('root');
const wordsDiv = document.createElement('div');

export function wordsPage(){
    root.replaceChildren();
    root.appendChild(wordsDiv);

    wordsDiv.innerHTML = `
    <link rel="stylesheet" href="../style/style.css">
    <div class='center'>
    <h3 id = "definition"></h3>
    <h3 id = "word"></h3>
    <button id="answer">Show answer</button>
    <button id="new">New word</button>
    </div>`;
    let wordsArray = 
    [{definition:`A difficult or painful experience, especially one that severely tests character or endurance. synonym: trial.`, word:`ordeal`}
    ,{definition:`to waste time or do something slowly`, word:`dally`}
    ,{definition:`a situation in which a lot of people complain about something angrily or make a lot of noise`, word:`uproar`}
    ,{definition:`something that you want and plan to do`, word:`intention`}
    ,{definition:`a basic idea or rule that explains or controls how something happens or works`, word:`principle`}
    ,{definition:`to show a feeling, opinion, or fact`, word:`express`}
    ,{definition:`anything that happens, especially something important or unusual`, word:`event`}
    ,{definition:`to control or influence something directly, or to decide what will happen`, word:`determine`}
    ,{definition:`to limit the movements or actions of someone, or to limit something and reduce its size or prevent it from increasing`, word:`restrict`}
    ,{definition:`(especially of accidents and other unexpected events) to happen`, word:`occur`}
    ,{definition:`to take or get possession of something again`, word:`regain`}
    ,{definition:`physical, especially violent, strength, or power`, word:`force`}
    ,{definition:`to change something slightly, especially in order to make it more correct, effective, or suitable`, word:`tweak`}
    ,{definition:`a shape like a corkscrew or spiral staircase`, word:`helix`}
    ,{definition:`worth a lot of money`, word:`valuable`}
    ,{definition:`it is available to use because it is extra`, word:`spare`}
    ,{definition:`able to be obtained`, word:`acquirable`}
    ,{definition:`a round vessel equipped with a handle and designed for drinking`, word:`mug`}
    ,{definition:`an official request for something, usually in writing`, word:`application`}
    ,{definition:`pleased because you have got what you wanted, or because something has happened in the way that you wanted`, word:`satisfied`}
    ,{definition:`to breathe fast and with difficulty, usually because you have been exercising`, word:`puff`}
    ,{definition:`very important and needing attention immediately`, word:`urgent`}
    ,{definition:`(especially of countries) the position of being the strongest and most powerful and therefore able to control others`, word:`hegemony`}
    ,{definition:`not serious about a serious subject, in an attempt to be funny or to appear clever`, word:`flippant`}
    ,{definition:`the fact that something is not good enough or is too small in amount`, word:`inadequacy`}
    ,{definition:`to criticize or speak in an angry manner to someone`, word:`berate`}
    ,{definition:`violent hate and anger expressed through severe criticism`, word:`vitriol`}
    ,{definition:`very pleasant, attractive, or enjoyable`, word:`delightful`}
    ,{definition:`a drink of any type`, word:`beverage`}
    ,{definition:`to mix a liquid or other substance by moving an object such as a spoon in a circular pattern`, word:`stir`}
    ,{definition:`to do something awkwardly, especially when using your hands`, word:`fumble`}
    ,{definition:`a particular situation, event, or fact, especially an example of something that happens generally`, word:`instance`}
    ,{definition:`to avoid something, especially cleverly or illegally`, word:`circumvent`}
    ,{definition:`to imagine something`, word:`conceive`}
    ,{definition:`to speak to someone severely because they have behaved badly`, word:`chide`}
    ,{definition:`a movement of the hands, arms, or head, etc. to express an idea or feeling`, word:`gesture`}
    ,{definition:`the situation when the parts of something fit together in a natural or reasonable way`, word:`coherence`}
    ,{definition:`a show of anger, worry, or excitement that is unnecessary or greater than the situation deserves`,word:`fuss`}
    ,{definition:`not needed or wanted, or more than is needed or wanted`,word:`unnecessary`}
    ,{definition:`to become or to make something become smaller in size, amount, degree, importance, etc.`,word:`reduce`}
    ,{definition:`strength of thought, opinion, expression, etc.`,word:`vigour`}
    ,{definition:`the number of times something happens within a particular period, or the fact of something happening often or a large number or times`,word:`frequency`}
    ,{definition:`perform an act, usually with a negative connotation`,word:`commit`}
    ,{definition:`set up or found`,word:`establish`}
    ,{definition:`an abstract or general idea inferred from specific instances`,word:`concept`}
    ,{definition:`a quantity that does not vary`,word:`constant`}
    ,{definition:`a well-substantiated explanation of some aspect of the world`,word:`theory`}
    ,{definition:`a variety of different things or activities`,word:`range`}
    ,{definition:`think moodily or anxiously about something`,word:`dwell`}
    ,{definition:`provide amusement for`,word:`entertain`}
    ,{definition:`more than half of the votes in an election`,word:`majority`}
    ,{definition:`a complex mental state involving beliefs and feelings`,word:`attitude`}
    ,{definition:`show to be reasonable or provide adequate ground for`,word:`justify`}
    ,{definition:`pay close attention to`,word:`heed`}]

    eventListener();
    function eventListener(){
        function answerF() {
            document.getElementById('word').innerText=word.word
        }
    function newF() {
            document.getElementById('answer').removeEventListener("click", answerF)
            document.getElementById('new').removeEventListener("click", newF)
            document.getElementById('word').innerText='';eventListener()
        }
        let word = wordsArray[Math.floor(Math.random() * wordsArray.length)]
        document.getElementById('definition').innerText=word.definition
        document.getElementById('answer').addEventListener('click', answerF)
        document.getElementById('new').addEventListener('click', newF)
    }
}