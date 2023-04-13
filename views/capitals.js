const root = document.getElementById('root');

export const countries = [
    {"name":"Afghanistan","capital":"Kabul"},
    {"name":"Albania","capital":"Tirana"},
    {"name":"Algeria","capital":"Algiers"},
    {"name":"Andorra","capital":"Andorra la Vella"},
    {"name":"Angola","capital":"Luanda"},
    {"name":"Antigua and Barbuda","capital":"Saint John's"},
    {"name":"Argentina","capital":"Buenos Aires"},
    {"name":"Armenia","capital":"Yerevan"},
    {"name":"Australia","capital":"Canberra"},
    {"name":"Austria","capital":"Vienna"},
    {"name":"Azerbaijan","capital":"Baku"},
    {"name":"Bahamas","capital":"Nassau"},
    {"name":"Bahrain","capital":"Manama"},
    {"name":"Bangladesh","capital":"Dhaka"},
    {"name":"Barbados","capital":"Bridgetown"},
    {"name":"Belarus","capital":"Minsk"},
    {"name":"Belgium","capital":"Brussels"},
    {"name":"Belize","capital":"Belmopan"},
    {"name":"Benin","capital":"Porto-Novo"},
    {"name":"Bhutan","capital":"Thimphu"},
    {"name":"Bolivia","capital":"La Paz"},
    {"name":"Bosnia and Herzegovina","capital":"Sarajevo"},
    {"name":"Botswana","capital":"Gaborone"},
    {"name":"Brazil","capital":"Brasilia"},
    {"name":"Brunei","capital":"Bandar Seri Begawan"},
    {"name":"Bulgaria","capital":"Sofia"},
    {"name":"Burkina Faso","capital":"Ouagadougou"},
    {"name":"Burundi","capital":"Gitega"},
    {"name":"Cambodia","capital":"Phnom Penh"},
    {"name":"Cameroon","capital":"Yaounde"},
    {"name":"Canada","capital":"Ottawa"},
    {"name":"Cape Verde","capital":"Praia"},
    {"name":"Central African Republic","capital":"Bangui"},
    {"name":"Chad","capital":"N'Djamena", countrycapitaltwo:"Ndjamena"},
    {"name":"Chile","capital":"Santiago"},
    {"name":"China","capital":"Beijing"},
    {"name":"Colombia","capital":"Bogota"},
    {"name":"Comoros","capital":"Moroni"},
    {"name":"Congo","capital":"Brazzaville"},
    {"name":"Democratic Republic of the Congo","capital":"Kinshasa"},
    {"name":"Costa Rica","capital":"San Jose"},
    {"name":"Ivory coast","capital":"Yamoussoukro"},
    {"name":"Croatia","capital":"Zagreb"},
    {"name":"Cuba","capital":"Havana"},
    {"name":"Cyprus","capital":"Nicosia"},
    {"name":"Czech Republic","capital":"Prague"},
    {"name":"Denmark","capital":"Copenhagen"},
    {"name":"Djibouti","capital":"Djibouti"},
    {"name":"Dominica","capital":"Roseau"},
    {"name":"Dominican Republic","capital":"Santo Domingo"},
    {"name":"Ecuador","capital":"Quito"},
    {"name":"Egypt","capital":"Cairo"},
    {"name":"El Salvador","capital":"San Salvador"},
    {"name":"Equatorial Guinea","capital":"Malabo"},
    {"name":"Eritrea","capital":"Asmara"},
    {"name":"Estonia","capital":"Tallinn"},
    {"name":"Ethiopia","capital":"Addis Ababa"},
    {"name":"Fiji","capital":"Suva"},
    {"name":"Finland","capital":"Helsinki"},
    {"name":"France","capital":"Paris"},
    {"name":"Gabon","capital":"Libreville"},
    {"name":"Gambia","capital":"Banjul"},
    {"name":"Georgia","capital":"Tbilisi"},
    {"name":"Germany","capital":"Berlin"},
    {"name":"Ghana","capital":"Accra"},
    {"name":"Greece","capital":"Athens"},
    {"name":"Grenada","capital":"Saint George's"},
    {"name":"Guatemala","capital":"Guatemala City"},
    {"name":"Guinea","capital":"Conakry"},
    {"name":"Guinea-Bissau","capital":"Bissau"},
    {"name":"Guyana","capital":"Georgetown"},
    {"name":"Haiti","capital":"Port-au-Prince"},
    {"name":"Vatican city","capital":"Vatican City"},
    {"name":"Honduras","capital":"Tegucigalpa"},
    {"name":"Hungary","capital":"Budapest"},
    {"name":"Iceland","capital":"Reykjavik"},
    {"name":"India","capital":"New Delhi"},
    {"name":"Indonesia","capital":"Jakarta"},
    {"name":"Iran","capital":"Tehran"},
    {"name":"Iraq","capital":"Baghdad"},
    {"name":"Ireland","capital":"Dublin"},
    {"name":"Israel","capital":"Jerusalem"},
    {"name":"Italy","capital":"Rome"},
    {"name":"Jamaica","capital":"Kingston"},
    {"name":"Japan","capital":"Tokyo"},
    {"name":"Jordan","capital":"Amman"},
    {"name":"Kazakhstan","capital":"Astana"},
    {"name":"Kenya","capital":"Nairobi"},
    {"name":"Kiribati","capital":"Tarawa"},
    {"name":"North Korea","capital":"Pyongyang"},
    {"name":"South Korea","capital":"Seoul"},
    {"name":"Kosovo","capital":"Pristina"},
    {"name":"Kuwait","capital":"Kuwait City"},
    {"name":"Kyrgyzstan","capital":"Bishkek"},
    {"name":"Laos","capital":"Vientiane"},
    {"name":"Latvia","capital":"Riga"},
    {"name":"Lebanon","capital":"Beirut"},
    {"name":"Lesotho","capital":"Maseru"},
    {"name":"Liberia","capital":"Monrovia"},
    {"name":"Libya","capital":"Tripoli"},
    {"name":"Liechtenstein","capital":"Vaduz"},
    {"name":"Lithuania","capital":"Vilnius"},
    {"name":"Luxembourg","capital":"Luxembourg"},
    {"name":"Macedonia","capital":"Skopje"},
    {"name":"Madagascar","capital":"Antananarivo"},
    {"name":"Malawi","capital":"Lilongwe"},
    {"name":"Malaysia","capital":"Kuala Lumpur"},
    {"name":"Maldives","capital":"Male"},
    {"name":"Mali","capital":"Bamako"},
    {"name":"Malta","capital":"Valletta"},
    {"name":"Marshall Islands","capital":"Majuro"},
    {"name":"Mauritania","capital":"Nouakchott"},
    {"name":"Mauritius","capital":"Port Louis"},
    {"name":"Mexico","capital":"Mexico City"},
    {"name":"Micronesia","capital":"Palikir"},
    {"name":"Moldova","capital":"Chisinau"},
    {"name":"Monaco","capital":"Monaco"},
    {"name":"Mongolia","capital":"Ulaanbaatar"},
    {"name":"Montenegro","capital":"Podgorica"},
    {"name":"Morocco","capital":"Rabat"},
    {"name":"Mozambique","capital":"Maputo"},
    {"name":"Myanmar","capital":"Naypyidaw"},
    {"name":"Namibia","capital":"Windhoek"},
    {"name":"Nauru","capital":"Yaren"},
    {"name":"Nepal","capital":"Kathmandu"},
    {"name":"Netherlands","capital":"Amsterdam"},
    {"name":"New Zealand","capital":"Wellington"},
    {"name":"Nicaragua","capital":"Managua"},
    {"name":"Niger","capital":"Niamey"},
    {"name":"Nigeria","capital":"Abuja"},
    {"name":"Norway","capital":"Oslo"},
    {"name":"Oman","capital":"Muscat"},
    {"name":"Pakistan","capital":"Islamabad"},
    {"name":"Palau","capital":"Ngerulmud"},
    {"name":"Palestine","capital":"Ramallah"},
    {"name":"Panama","capital":"Panama City"},
    {"name":"Papua New Guinea","capital":"Port Moresby"},
    {"name":"Paraguay","capital":"Asuncion"},
    {"name":"Peru","capital":"Lima"},
    {"name":"Philippines","capital":"Manila"},
    {"name":"Poland","capital":"Warsaw"},
    {"name":"Portugal","capital":"Lisbon"},
    {"name":"Qatar","capital":"Doha"},
    {"name":"Romania","capital":"Bucharest"},
    {"name":"Russia","capital":"Moscow"},
    {"name":"Rwanda","capital":"Kigali"},
    {"name":"Saint Kitts and Nevis","capital":"Basseterre"},
    {"name":"Saint Lucia","capital":"Castries"},
    {"name":"Saint Vincent and the Grenadines","capital":"Kingstown"},
    {"name":"Samoa","capital":"Apia"},
    {"name":"San Marino","capital":"San Marino"},
    {"name":"Sao Tome and Principe","capital":"Sao Tome"},
    {"name":"Saudi Arabia","capital":"Riyadh"},
    {"name":"Senegal","capital":"Dakar"},
    {"name":"Serbia","capital":"Belgrade"},
    {"name":"Seychelles","capital":"Victoria"},
    {"name":"Sierra Leone","capital":"Freetown"},
    {"name":"Singapore","capital":"Singapore"},
    {"name":"Slovakia","capital":"Bratislava"},
    {"name":"Slovenia","capital":"Ljubljana"},
    {"name":"Solomon Islands","capital":"Honiara"},
    {"name":"Somalia","capital":"Mogadishu"},
    {"name":"South Africa","capital":"Pretoria"},
    {"name":"South Sudan","capital":"Juba"},
    {"name":"Spain","capital":"Madrid"},
    {"name":"Sri Lanka","capital":"Colombo",capitaltwo:'Sri Jayawardenepura Kotte'},
    {"name":"Sudan","capital":"Khartoum"},
    {"name":"Suriname","capital":"Paramaribo"},
    {"name":"Eswatini","capital":"Mbabane"},
    {"name":"Sweden","capital":"Stockholm"},
    {"name":"Switzerland","capital":"Bern"},
    {"name":"Syria","capital":"Damascus"},
    {"name":"Taiwan","capital":"Taipei"},
    {"name":"Tajikistan","capital":"Dushanbe"},
    {"name":"Tanzania","capital":"Dodoma"},
    {"name":"Thailand","capital":"Bangkok"},
    {"name":"Timor-Leste","capital":"Dili"},
    {"name":"Togo","capital":"Lome"},
    {"name":"Tonga","capital":"Nuku'alofa"},
    {"name":"Trinidad and Tobago","capital":"Port of Spain"},
    {"name":"Tunisia","capital":"Tunis"},
    {"name":"Turkey","capital":"Ankara"},
    {"name":"Turkmenistan","capital":"Ashgabat"},
    {"name":"Tuvalu","capital":"Funafuti"},
    {"name":"Uganda","capital":"Kampala"},
    {"name":"Ukraine","capital":"Kyiv"},
    {"name":"United Arab Emirates","capital":"Abu Dhabi"},
    {"name":"United Kingdom","capital":"London"},
    {"name":"United States","capital":"Washington"},
    {"name":"Uruguay","capital":"Montevideo"},
    {"name":"Uzbekistan","capital":"Tashkent"},
    {"name":"Vanuatu","capital":"Port Vila"},
    {"name":"Venezuela","capital":"Caracas"},
    {"name":"Vietnam","capital":"Hanoi"},
    {"name":"Yemen","capital":"Sanaa"},
    {"name":"Zambia","capital":"Lusaka"},
    {"name":"Zimbabwe","capital":"Harare"}
];


const capitalsDiv = document.createElement('div');
export function capitalsPage(){
    root.replaceChildren();
    root.appendChild(capitalsDiv);


    capitalsDiv.innerHTML = `
    <h3 id = "name"></h3>
    <input id = "capitalInput"></input>
    <span id = "streak">Streak: 0</span>`;


    let streak = 0;

    eventListener();
    
    function eventListener(){
        let country = countries[Math.floor(Math.random() * countries.length)];

        document.getElementById("name").innerText = `What is the capital of ${country.name}?`;
        document.getElementById("streak").innerText = `Streak: ${streak}`;


        const capitalsInput = document.getElementById("capitalInput");
        let myListener;
        capitalsInput.addEventListener("input", myListener = (event) => {
        if(capitalsInput.value.toLowerCase() == country["capital"].toLowerCase()){
            event.preventDefault();
            streak++;
            capitalsInput.value = "";
            capitalsInput.removeEventListener('input', myListener);
            eventListener()
        }
    });
    }
}