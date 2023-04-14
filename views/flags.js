

const root = document.getElementById('root');

const countries = [
    {"name":"Afghanistan","code":"AF","id":1},
    {"name":"Albania","code":"AL","id":3},
    {"name":"Algeria","code":"DZ","id":4},
    {"name":"Andorra","code":"AD","id":6},
    {"name":"Angola","code":"AO","id":7},
    {"name":"Antigua and Barbuda","code":"AG","id":10},
    {"name":"Argentina","code":"AR","id":11},
    {"name":"Armenia","code":"AM","id":12},
    {"name":"Australia","code":"AU","id":14},
    {"name":"Austria","code":"AT","id":15},
    {"name":"Azerbaijan","code":"AZ","id":16},
    {"name":"Bahamas","code":"BS","id":17},
    {"name":"Bahrain","code":"BH","id":18},
    {"name":"Bangladesh","code":"BD","id":19},
    {"name":"Barbados","code":"BB","id":20},
    {"name":"Belarus","code":"BY","id":21},
    {"name":"Belgium","code":"BE","id":22},
    {"name":"Belize","code":"BZ","id":23},
    {"name":"Benin","code":"BJ","id":24},
    {"name":"Bhutan","code":"BT","id":26},
    {"name":"Bolivia","code":"BO","id":27},
    {"name":"Bosnia and Herzegovina","code":"BA","id":29},
    {"name":"Botswana","code":"BW","id":30},
    {"name":"Brazil","code":"BR","id":32},
    {"name":"Brunei","code":"BN","id":34},
    {"name":"Bulgaria","code":"BG","id":35},
    {"name":"Burkina Faso","code":"BF","id":36},
    {"name":"Burundi","code":"BI","id":37},
    {"name":"Cambodia","code":"KH","id":38},
    {"name":"Cameroon","code":"CM","id":39},
    {"name":"Canada","code":"CA","id":40},
    {"name":"Cape Verde","code":"CV","id":41},
    {"name":"Central African Republic",name2:'car',"code":"CF","id":43},
    {"name":"Chad","code":"TD","id":44},
    {"name":"Chile","code":"CL","id":45},
    {"name":"China","code":"CN","id":46},
    {"name":"Colombia","code":"CO","id":49},
    {"name":"Comoros","code":"KM","id":50},
    {"name":"Congo",name2:"republic of congo","code":"CG","id":51},
    {"name":"Democratic Republic of the Congo",name2:'drc',"code":"CD","id":52},
    {"name":"Costa Rica","code":"CR","id":54},
    {"name":"Ivory coast","code":"CI","id":55},
    {"name":"Croatia","code":"HR","id":56},
    {"name":"Cuba","code":"CU","id":57},
    {"name":"Cyprus","code":"CY","id":59},
    {"name":"Czech Republic",name2:'czechia',"code":"CZ","id":60},
    {"name":"Denmark","code":"DK","id":61},
    {"name":"Djibouti","code":"DJ","id":62},
    {"name":"Dominica","code":"DM","id":63},
    {"name":"Dominican Republic","code":"DO","id":64},
    {"name":"Ecuador","code":"EC","id":65},
    {"name":"Egypt","code":"EG","id":66},
    {"name":"El Salvador","code":"SV","id":67},
    {"name":"Equatorial Guinea","code":"GQ","id":68},
    {"name":"Eritrea","code":"ER","id":69},
    {"name":"Estonia","code":"EE","id":70},
    {"name":"Ethiopia","code":"ET","id":71},
    {"name":"Fiji","code":"FJ","id":74},
    {"name":"Finland","code":"FI","id":75},
    {"name":"France","code":"FR","id":76},
    {"name":"Gabon","code":"GA","id":80},
    {"name":"Gambia","code":"GM","id":81},
    {"name":"Georgia","code":"GE","id":82},
    {"name":"Germany","code":"DE","id":83},
    {"name":"Ghana","code":"GH","id":84},
    {"name":"Greece","code":"GR","id":86},
    {"name":"Grenada","code":"GD","id":88},
    {"name":"Guatemala","code":"GT","id":91},
    {"name":"Guinea","code":"GN","id":93},
    {"name":"Guinea-Bissau",name2:'Guinea bissau',"code":"GW","id":94},
    {"name":"Guyana","code":"GY","id":95},
    {"name":"Haiti","code":"HT","id":96},
    {"name":"Vatican city","code":"VA","id":98},
    {"name":"Honduras","code":"HN","id":99},
    {"name":"Hungary","code":"HU","id":101},
    {"name":"Iceland","code":"IS","id":102},
    {"name":"India","code":"IN","id":103},
    {"name":"Indonesia","code":"ID","id":104},
    {"name":"Iran","code":"IR","id":105},
    {"name":"Iraq","code":"IQ","id":106},
    {"name":"Ireland","code":"IE","id":107},
    {"name":"Israel","code":"IL","id":109},
    {"name":"Italy","code":"IT","id":110},
    {"name":"Jamaica","code":"JM","id":111},
    {"name":"Japan","code":"JP","id":112},
    {"name":"Jordan","code":"JO","id":114},
    {"name":"Kazakhstan","code":"KZ","id":115},
    {"name":"Kenya","code":"KE","id":116},
    {"name":"Kiribati","code":"KI","id":117},
    {"name":"North Korea","code":"KP","id":118},
    {"name":"South Korea","code":"KR","id":119},
    //{"name":"Kosovo","code":"XK","id":120},
    {"name":"Kuwait","code":"KW","id":121},
    {"name":"Kyrgyzstan","code":"KG","id":122},
    {"name":"Laos","code":"LA","id":123},
    {"name":"Latvia","code":"LV","id":124},
    {"name":"Lebanon","code":"LB","id":125},
    {"name":"Lesotho","code":"LS","id":126},
    {"name":"Liberia","code":"LR","id":127},
    {"name":"Libya","code":"LY","id":128},
    {"name":"Liechtenstein","code":"LI","id":129},
    {"name":"Lithuania","code":"LT","id":130},
    {"name":"Luxembourg","code":"LU","id":131},
    {"name":"North Macedonia",name2:"Macedonia","code":"MK","id":133},
    {"name":"Madagascar","code":"MG","id":134},
    {"name":"Malawi","code":"MW","id":135},
    {"name":"Malaysia","code":"MY","id":136},
    {"name":"Maldives","code":"MV","id":137},
    {"name":"Mali","code":"ML","id":138},
    {"name":"Malta","code":"MT","id":139},
    {"name":"Marshall Islands","code":"MH","id":140},
    {"name":"Mauritania","code":"MR","id":142},
    {"name":"Mauritius","code":"MU","id":143},
    {"name":"Mexico","code":"MX","id":145},
    {"name":"Micronesia","code":"FM","id":146},
    {"name":"Moldova","code":"MD","id":147},
    {"name":"Monaco","code":"MC","id":148},
    {"name":"Mongolia","code":"MN","id":149},
    {"name":"Montenegro","code":"ME","id":150},
    {"name":"Morocco","code":"MA","id":152},
    {"name":"Mozambique","code":"MZ","id":153},
    {"name":"Myanmar","code":"MM","id":154},
    {"name":"Namibia","code":"NA","id":155},
    {"name":"Nauru","code":"NR","id":156},
    {"name":"Nepal","code":"NP","id":157},
    {"name":"Netherlands","code":"NL","id":158},
    {"name":"New Zealand","code":"NZ","id":161},
    {"name":"Nicaragua","code":"NI","id":162},
    {"name":"Niger","code":"NE","id":163},
    {"name":"Nigeria","code":"NG","id":164},
    {"name":"Norway","code":"NO","id":168},
    {"name":"Oman","code":"OM","id":169},
    {"name":"Pakistan","code":"PK","id":170},
    {"name":"Palau","code":"PW","id":171},
    {"name":"Palestine","code":"PS","id":172},
    {"name":"Panama","code":"PA","id":173},
    {"name":"Papua New Guinea","code":"PG","id":174},
    {"name":"Paraguay","code":"PY","id":175},
    {"name":"Peru","code":"PE","id":176},
    {"name":"Philippines","code":"PH","id":177},
    {"name":"Poland","code":"PL","id":179},
    {"name":"Portugal","code":"PT","id":180},
    {"name":"Qatar","code":"QA","id":182},
    {"name":"Romania","code":"RO","id":184},
    {"name":"Russia","code":"RU","id":185},
    {"name":"Rwanda","code":"RW","id":186},
    {"name":"Saint Kitts and Nevis","code":"KN","id":189},
    {"name":"Saint Lucia","code":"LC","id":190},
    {"name":"Saint Vincent and the Grenadines","code":"VC","id":193},
    {"name":"Samoa","code":"WS","id":194},
    {"name":"San Marino","code":"SM","id":195},
    {"name":"Sao Tome and Principe","code":"ST","id":196},
    {"name":"Saudi Arabia","code":"SA","id":197},
    {"name":"Senegal","code":"SN","id":198},
    {"name":"Serbia","code":"RS","id":199},
    {"name":"Seychelles","code":"SC","id":201},
    {"name":"Sierra Leone","code":"SL","id":202},
    {"name":"Singapore","code":"SG","id":203},
    {"name":"Slovakia","code":"SK","id":205},
    {"name":"Slovenia","code":"SI","id":206},
    {"name":"Solomon Islands","code":"SB","id":207},
    {"name":"Somalia","code":"SO","id":208},
    {"name":"South Africa","code":"ZA","id":209},
    {"name":"South Sudan","code":"SS","id":211},
    {"name":"Spain","code":"ES","id":212},
    {"name":"Sri Lanka","code":"LK","id":213},
    {"name":"Sudan","code":"SD","id":214},
    {"name":"Suriname","code":"SR","id":215},
    {"name":"Eswatini","code":"SZ","id":217},
    {"name":"Sweden","code":"SE","id":218},
    {"name":"Switzerland","code":"CH","id":219},
    {"name":"Syria","code":"SY","id":220},
    {"name":"Taiwan","code":"TW","id":221},
    {"name":"Tajikistan","code":"TJ","id":222},
    {"name":"Tanzania","code":"TZ","id":223},
    {"name":"Thailand","code":"TH","id":224},
    {"name":"Timor-Leste",name2:"Timor Leste","code":"TL","id":225},
    {"name":"Togo","code":"TG","id":226},
    {"name":"Tonga","code":"TO","id":228},
    {"name":"Trinidad and Tobago","code":"TT","id":229},
    {"name":"Tunisia","code":"TN","id":230},
    {"name":"Turkey","code":"TR","id":231},
    {"name":"Turkmenistan","code":"TM","id":232},
    {"name":"Tuvalu","code":"TV","id":234},
    {"name":"Uganda","code":"UG","id":235},
    {"name":"Ukraine","code":"UA","id":236},
    {"name":"United Arab Emirates",name2:"uae","code":"AE","id":237},
    {"name":"United Kingdom",name2:'uk',"code":"GB","id":238},
    {"name":"United States",name2:'usa',"code":"US","id":239},
    {"name":"Uruguay","code":"UY","id":241},
    {"name":"Uzbekistan","code":"UZ","id":242},
    {"name":"Vanuatu","code":"VU","id":243},
    {"name":"Venezuela","code":"VE","id":244},
    {"name":"Vietnam","code":"VN","id":245},
    {"name":"Yemen","code":"YE","id":250},
    {"name":"Zambia","code":"ZM","id":251},
    {"name":"Zimbabwe","code":"ZW","id":252}
];

const capitalsDiv = document.createElement('div');
export function flagsPage(){
    root.replaceChildren();
    root.appendChild(capitalsDiv);

    capitalsDiv.innerHTML = `
    <div style='color: rgb(100,100,185); display:block; text-align:center'>
    <h3 id = "name">Which country does this flag belong to?</h3>
    <img id = "flag" style='display: block;margin-left: auto; margin-right: auto;margin-bottom:10px;'/>
    <input id = "capitalInput"></input>
    <span id = "streak" style='margin-top:10px;display:block'>Streak: 0</span>
    </div>`;

    let streak = 0;

    eventListener();
    
    function eventListener(){
        let country = countries[Math.floor(Math.random() * countries.length)];
        
        document.getElementById("flag").src = `../flags/${country.code}.png`;
        document.getElementById("flag").style.height = `60px`;
        document.getElementById("flag").style.width = `100px`;
        document.getElementById("streak").innerText = `Streak: ${streak}`;


        const capitalsInput = document.getElementById("capitalInput");
        let myListener;
        if(country.name2==undefined) country.name2 = country.name;
        capitalsInput.addEventListener("input", myListener = (event) => {
        if(capitalsInput.value.toLowerCase() == country["name"].toLowerCase() || capitalsInput.value.toLowerCase() == country["name2"].toLowerCase()){
            event.preventDefault();
            streak++;
            capitalsInput.value = "";
            capitalsInput.removeEventListener('input', myListener);
            eventListener()
        }
    });
    }
};