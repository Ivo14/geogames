import page from "./node_modules/page/page.mjs"
import { homePage } from "./views/home.js";
import { capitalsPage } from "./views/capitals.js";
import { flagsPage } from "./views/flags.js";
import { flagsabcdPage } from "./views/flagsabcd.js"
import { descriptionPage } from "./views/description.js"
import { maplocationPage } from "./views/maplocation.js"
import { scramblePage } from "./views/scramble.js"
import { hangmanPage } from "./views/hangman.js"
import { trueorfalsePage } from "./views/trueorfalse.js"
import { checkAppearance } from "./utility/appearance.js";
import { tttPage } from "./views/ttt.js"
import { questionsPage } from "./views/questions.js";
import { wordsPage } from "./views/words.js";

page('/index.html','/');
page('/',homePage);
page('/capitals',capitalsPage);
page('/flags',flagsPage)
page('/flagsabcd',flagsabcdPage)
page('/description',descriptionPage)
page('/maplocation',maplocationPage)
page('/scramble',scramblePage)
page('/hangman',hangmanPage)
page('/trueorfalse',trueorfalsePage)
page('/ttt',tttPage)
page('/questions',questionsPage);
page('/words',wordsPage);
if(localStorage.darkTheme){
    document.getElementById("appearance").textContent = "☀";
}
else{
    document.getElementById("appearance").textContent = "☽";
}

page.start();

checkAppearance();

//TODO: Finish appearance