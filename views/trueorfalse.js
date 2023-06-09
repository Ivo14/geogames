const root = document.getElementById('root');
let facts = [{text:'Vatican City is the smallest country of Europe.', trueorfalse:'true'},
             {text:'Istanbul is the capital of Turkey.',trueorfalse:'false'},
             {text:'China has one standard timezone.',trueorfalse:'true'},
             {text:'The Nile flows into the Mediterranean sea.',trueorfalse:'true'},
             {text:'The largest country in the world is Russia.',trueorfalse:'true'},
             {text:'Volcanoes are often found on tectonic plates.',trueorfalse:'true'},
             {text:'The capital city of Australia is Sydney.',trueorfalse:'false'},
             {text:'France and Slovenia share a border.',trueorfalse:'false'},
             {text:'Netherlands and France share a border.',trueorfalse:'true'},
             {text:'New York City is the most populated city in the USA.',trueorfalse:'true'},
             {text:'Iran shares a border with Turkmenistan.',trueorfalse:'true'},
             {text:'The Volga is the longest river in Europe.',trueorfalse:'true'},
             {text:'Poland borders Russia.',trueorfalse:'true'},
             {text:'Florida is the only state in the USA which starts with the letter F.',trueorfalse:'true'},
             {text:'The Democratic republic of Congo is the largest country in Africa.',trueorfalse:'false'},
             {text:'Bolivia is landlocked.',trueorfalse:'true'},
             {text:'Liechtenstein is the only country which is double landlocked.',trueorfalse:'false'},
             {text:'Texas is the largest US state by land area.',trueorfalse:'false'},
             {text:'France is the country with the most time zones.',trueorfalse:'true'},
             {text:'Sri lanka is in the Southern Hemisphere.',trueorfalse:'false'},
             {text:'Every country is south of Antarctica.',trueorfalse:'false'},
             {text:'Brooklyn is part of New York City.',trueorfalse:'true'},
             {text:'There is a US state that has the same name as a country.', trueorfalse:'true'},
             {text:'There is only one country between Norway and North Korea.', trueorfalse:'true'},
             {text:'China exports a higher value of goods than any other country.', trueorfalse:'true'},
             {text:'Less than 1% of the Caribbean Islands are populated.', trueorfalse:'true'},
             {text:'The River Danube empties into the Black Sea.', trueorfalse:'true'},
             {text:'The flags of Morocco and Saudi Arabia contain all of the same colors.', trueorfalse:'false'},
             {text:'The Argentina-Chile border is longer than the Russia-Mongolia border.', trueorfalse:'true'},
             {text:'South America has a larger population than North America.', trueorfalse:'false'},
             {text:'The Indian Ocean is the third largest ocean in the world.', trueorfalse:'true'},
             {text:'Scotland has a larger population than Wales.',trueorfalse:'true'},
             {text:'Melbourne is the capital of New South Wales.',trueorfalse:'false'},
             {text:'Sydney is the capital city of the state of New South Wales.',trueorfalse:'true'},
             {text:'Paraguay is a landlocked country.',trueorfalse:'true'},
             {text:'The state of Mississippi shares a border with the state of Missouri.',trueorfalse:'false'},
             {text:'The United States and Canada share the longest international border.',trueorfalse:'true'},
             {text:'The most populous city in the world is Tokyo.',trueorfalse:'false'},
             {text:'Benin is in Asia.',trueorfalse:'false'},
             {text:'Japan has more islands than the Philippines.',trueorfalse:'false'},
             {text:'Indonesia borders Brunei.',trueorfalse:'false'},
             {text:'Malaysia borders Singapore.',trueorfalse:'true'},
             {text:'Portugal has islands in the Atlantic ocean.',trueorfalse:'true'},
             {text:'Argentina has a territorial dispute with the UK.',trueorfalse:'true'},
             {text:'Sudan is in East Africa.',trueorfalse:'true'},
             {text:'The capital of South Sudan is Khartoum.',trueorfalse:'false'},
             {text:'Fort-de-France is a city on the Reunion island.',trueorfalse:'false'},
             {text:'Durdle Door is a man-made landmark in England.',trueorfalse:'false'},
             {text:'Mount Isa is in the Northern Territory of Australia.',trueorfalse:'false'},
             {text:'Eritrea borders Ethiopia.',trueorfalse:'true'},
             {text:'Egypt has land on two continents.',trueorfalse:'true'},
             {text:'Chad borders the Central African Republic.',trueorfalse:'true'},
             {text:'Angola is landlocked.',trueorfalse:'false'},
             {text:'Belize used to be called British Honduras.',trueorfalse:'true'},
             {text:'Iraq does not border Saudi Arabia',trueorfalse:'false'},
             {text:'Gabon is on the equator.',trueorfalse:'true'},
             {text:'Brazil borders all South American countries.',trueorfalse:'false'},
             {text:'The USA has 51 states.',trueorfalse:'false'},
             {text:'The City of London is the smallest city in the UK in size.',trueorfalse:'true'},
             {text:'Windermere is the largest natural lake in England.',trueorfalse:'true'},
             {text:'Brno is a city in Czechia.',trueorfalse:'true'},
             {text:'The Golden Gate Bridge is in Florida.',trueorfalse:'false'},
             {text:'Wyoming is the least populous state.',trueorfalse:'true'},
             {text:'Georgia has more population than Mauritania',trueorfalse:'false'},
             {text:'Machu Picchu is located in Peru.',trueorfalse:'true'},
             {text:'Paraguay is larger by land area than Uruguay.',trueorfalse:'true'},
             {text:'The capital of Mexico is Veracruz.',trueorfalse:'false'},
             {text:'Veracruz is a city in Mexico.',trueorfalse:'true'},
             {text:'Costa Rica borders Honduras.',trueorfalse:'false'},
             {text:'Kuwait is a country in Africa.',trueorfalse:'false'},
             {text:'Djibouti is a country in Asia.',trueorfalse:'false'},
             {text:'The capital of Micronesia is Palikir.',trueorfalse:'true'},
             {text:'The capital of Palau is Palikir.',trueorfalse:'false'},
             {text:'France is closer to the equator than the UK.',trueorfalse:'true'},
             {text:'Turkmenistan uses Manat as their currency.',trueorfalse:'true'},
             {text:'Kazakhstan is the biggest landlocked country.',trueorfalse:'true'},
             {text:'Mongolia is the second biggest landlocked country.',trueorfalse:'true'},
             {text:'The capital of Turkey is Athens.',trueorfalse:'false'},
             {text:'The capital of Thailand is Kuala Lumpur.',trueorfalse:'false'},
             {text:'The capital of Madagascar is Kampala.',trueorfalse:'false'},
             {text:'The highest point of Netherlands is higher than the highest point in Lithuania.',trueorfalse:'true'},
             {text:'The Hague is the capital of the Netherlands.',trueorfalse:'false'},
             {text:'Amsterdam is the capital of Belgium.',trueorfalse:'false'},
             {text:'India has more population than Russia.',trueorfalse:'true'},
             {text:'The Caspian Sea is not a sea.',trueorfalse:'true'},
             {text:'Iran has access to the Caspian Sea.',trueorfalse:'true'},
             {text:`The Caspian Sea is the world's largest inland body of water.`,trueorfalse:'true'},
             {text:'The highest mountain in the UK is Snowdon.',trueorfalse:'false'},
             {text:'Glasgow is north of Belfast.',trueorfalse:'true'},
             {text:'Brasília is the capital city of Brazil.',trueorfalse:'true'},
             {text:'Mexico is south of the equator.',trueorfalse:'false'},
             {text:'The island of Borneo is occupied by three countries.',trueorfalse:'true'},
             {text:'It is possible to travel on roads from the North America to South America.',trueorfalse:'false'},
             {text:'The Maldives has the lowest high point of any country.',trueorfalse:'true'},
             {text:'No countries share a land border with the United Kingdom.',trueorfalse:'false'},
             {text:`The world's tallest waterfall is in Venezuela.`,trueorfalse:'true'},
             {text:'Ethiopia is landlocked.',trueorfalse:'true'},
             {text:'Nepal is landlocked.',trueorfalse:'true'},
             {text:'The island Aruba belongs to the Netherlands.',trueorfalse:'true'},
             {text:'The island Aruba belongs to Spain.',trueorfalse:'false'},
             {text:'China borders the same amount of countries as Russia does.',trueorfalse:'true'},
             {text:'Sri lanka is landlocked.',trueorfalse:'false'},
             {text:'Slovakia borders Slovenia.',trueorfalse:'false'},
             {text:'Somalia borders Kenya.',trueorfalse:'true'},
             {text:'Nigeria has more population than France.',trueorfalse:'true'},
             {text:'Malawi does not border any lakes.',trueorfalse:'false'},
             {text:'Brazil has more land area than all other South American countries.',trueorfalse:'false'},
             {text:'The capital of Chile has more letters in its name than the capital of Andorra.',trueorfalse:'false'},
             {text:'Switzerland is in NATO.',trueorfalse:'false'},
             {text:'All the countries bordering Switzerland are part of NATO.',trueorfalse:'false'},
             {text:'Nauru does not have a official capital.',trueorfalse:'true'},
             {text:'The literacy rate in Cuba is one of the highest in the world.',trueorfalse:'true'},
             {text:'Sudan has more ancient pyramids than Egypt.',trueorfalse:'true'},
             {text:'The capital of Jamaica is Kingston.', trueorfalse:'true'},
             {text:'The capital of Jamaica is Kingstown.', trueorfalse:'false'},
             {text:'Bluetooth is named after a danish viking king.',trueorfalse:'true'},
             {text:'Gangnam is one of the districts of Seoul.',trueorfalse:'true'},
             {text:'Nauru does not have an official capital.',trueorfalse:'true'},
             {text:'In India cows are considered sacred.',trueorfalse:'true'},
             {text:'India has over 300,000 mosques.',trueorfalse:'true'},
             {text:'India has 11 official languages.',trueorfalse:'true'},
             {text:`India's telecommunication industry is the largest in the world`,trueorfalse:'false'},
             {text:'India has the highest population of vegetarians',trueorfalse:'true'},
             {text:'India is divided into states.',trueorfalse:'true'},
             {text:'There are 17 megadiverse countries.',trueorfalse:'true'},
             {text:'Ecuador is a megadiverse country.',trueorfalse:'true'},
             {text:'Peru is a megadiverse country.',trueorfalse:'true'},
             {text:'Russia is a megadiverse country.',trueorfalse:'false'},
             {text:'The Wiphala is a square emblem which includes the colours red, orange, yellow, white, green, blue and violet',trueorfalse:'true'},
             {text:`The Wiphala represent some native peoples of the Andes that include today's Peru, Bolivia, Chile, Ecuador, northwestern Argentina and southern Colombia.`,trueorfalse:'true'},
             {text:'Since the Reformation of the 16th century, Switzerland has maintained a policy of armed neutrality.',trueorfalse:'true'},
             //schengen
             {text:'Switzerland is not part of the Schengen area',trueorfalse:'false'},
             {text:'Croatia joined the Schengen Area on 1 January 2023.',trueorfalse:'true'},
             {text:'De facto, the Schengen Area also includes non-EU countries.',trueorfalse:'true'},
             {text:'The Schengen Area is an area comprising of more than 30 European countries',trueorfalse:'false'},
             {text:'Liechtenstein is part of the Schengen Area.',trueorfalse:'true'},
             {text:'The United Kingdom is part of the Schengen Area.',trueorfalse:'false'},
             {text:'All french overseas territories are part of the Schengen Area.',trueorfalse:'false'},
             {text:'The Schengen Area includes countries outside of Europe.',trueorfalse:'false'},
             {text:'The Schengen Area includes countries only in Europe.',trueorfalse:'true'},
             {text:`Luxembourg's official name is the Grand Duchy of Luxembourg.`,trueorfalse:'true'},
             {text:'Luxembourg borders Germany to the west.',trueorfalse:'false'},
             {text:'Slovenia has a higher population than Cyprus.',trueorfalse:'true'},
             {text:`The Anthem of Slovenia is Zdravljica (English: "A Toast").`,trueorfalse:'true'},
             {text:'The capital of Benin is Ljubljana.',trueorfalse:'false'},
             {text:'Denmark is part of the European Union with no opt-outs.',trueorfalse:'false'},
             {text:'Slovenia was the only present-day European nation that was trisected and completely annexed into both Germany and Italy during World War II.',trueorfalse:'true'},
             {text:'Hungary annexed parts of Slovenia during WWII.',trueorfalse:'true'},
             {text:'Slovenia borders the Mediterranean Sea.',trueorfalse:'true'},
             {text:'Denmark did not maintain its neutral stance during World War I.',trueorfalse:'false'},
             {text:'Estonian is part of the Baltic languages.',trueorfalse:'false'},
             {text:'Indonesian is part of the Indo-European languages.',trueorfalse:'false'},
             {text:'Hungarian is an Indo-European language.',trueorfalse:'false'},
             {text:'There is no official language in the US.',trueorfalse:'true'},
             {text:'Half the population of the world speaks 23 languages.',trueorfalse:'true'},
             {text:'Half the world is bilingual.',trueorfalse:'true'},
             {text:'Papua New Guinea is the country with the most number of languages in the world.',trueorfalse:'true'},
             {text:'Russia is the country with the most number of languages in the world.',trueorfalse:'false'},
             {text:'India is the country with the most number of languages in the world.',trueorfalse:'false'},
             {text:'French is known in the world today as the love language.',trueorfalse:'true'},
             {text:'South Africa has 5 official languages.',trueorfalse:'false'},
             {text:'English has the shortest grammatically correct sentence.',trueorfalse:'true'},
             {text:'North Korea and South Korea speak different languages.',trueorfalse:'true'}
            ];


const mainDiv = document.createElement('div');
export function trueorfalsePage(){
    root.replaceChildren();
    root.appendChild(mainDiv);

    mainDiv.innerHTML = `
    <link rel="stylesheet" href="../style/style.css">
    <div class='center'>
    <h3 id = "name"></h3>
    <button id="green";>True</button>
    <button id="red";>False</button>
    <span id = "streak" style='margin-top:10px;display:block'>Streak: 0</span>
    </div>`;

    let streak = 0;

    eventListener();
    
    function eventListener(){
        let factDiv = document.getElementById('name')
        let streakDiv = document.getElementById('streak')
        let green = document.getElementById('green')
        let red = document.getElementById('red')
        red.style.backgroundColor = 'rgb(102,127,255)'
        red.style.borderStyle = 'solid';
        red.style.borderWidth = '3px';
        red.style.borderRadius = '4px';
        red.style.borderColor = 'rgb(9, 9, 26)';
        green.style.backgroundColor = 'rgb(102,127,255)'
        green.style.borderStyle = 'solid';
        green.style.borderWidth = '3px';
        green.style.borderRadius = '4px';
        green.style.borderColor = 'rgb(9, 9, 26)';
        green.style.width = '100px';
        red.style.width = '100px';
        green.style.height = '30px';
        red.style.height = '30px';

        let currentfact
        let newfact = () => {
        currentfact=facts[Math.floor(Math.random() * facts.length)]
        factDiv.innerText=currentfact.text}
        newfact();
        green.onclick = () => {
          if(currentfact.trueorfalse=='true'){
           streak++;streakDiv.innerText=`Streak: ${streak}`;streakDiv.style.color='rgb(100,100,185)'; newfact();
        }else{streak=0;streakDiv.innerText=`Streak: ${streak}`;streakDiv.style.color='red'}}
        red.onclick = () => {
          if(currentfact.trueorfalse=='false'){
           streak++;streakDiv.innerText=`Streak: ${streak}`;streakDiv.style.color='rgb(100,100,185)'; newfact(); 
          }
          else{streak=0;streakDiv.innerText=`Streak: ${streak}`;streakDiv.style.color='red'}
        }
    }
}