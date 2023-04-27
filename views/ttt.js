const root = document.getElementById('root');

export function tttPage(){
    root.replaceChildren();
    let squaresArray = ['','','','','','','','',''];
    
    const table = document.createElement('div');
    table.innerHTML = `
    <link rel="stylesheet" href="../style/style.css">
    <table id="table" class='center'>
        
    </table>
    `;
    table.style.marginTop = "150px";
    table.style.width = "140px";
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
    root.appendChild(table);

    const tbody = document.getElementById('table');
    
    let counter = 0;
    let moveCounter = 0;
    for(let i = 0; i < 3; i++){
        const tr = document.createElement('tr');
        tr.style.height = "40px";
        for(let j = 0; j < 3; j++){
            const td = document.createElement('td');
            td.id = `${counter}`;

            td.style.height = "40px";
            td.style.width = "40px";
            td.style.backgroundColor = "blue";

            td.style.borderRadius = "3px";

            td.addEventListener('click',(event) => {
                const id = event.target.id;
                squaresArray[Number(id)] = 'X';
                if(moveCounter % 2 == 0){
                    if(event.target.innerHTML == ''){
                        moveCounter++;
                        event.target.innerHTML = '<img src="../tttimages/x.png" height="30px" width="30px"/>';
                    }
                }
                else{
                    if(event.target.innerHTML == ""){
                        moveCounter++;
                        event.target.innerHTML = '<img src="../tttimages/o.png" height="30px" width="30px"/>';
                    }
                }
            })
            tr.appendChild(td);

            counter++;
        }
        tbody.appendChild(tr);
    }
    
    /*
        <tr style="height:40px">
            <th style="height:40px;width:40px; background-color:yellow; border-radius:5px; border-style: solid; border-width: 3px;"></th>
            <th style="height:40px;width:40px; background-color:yellow; border-radius:5px; border-style: solid; border-width: 3px;"></th>
            <th style="height:40px;width:40px; background-color:yellow; border-radius:5px; border-style: solid; border-width: 3px;"></th>
        </tr>
        <tr style="height:40px">
            <th style="height:40px;width:40px; background-color:yellow; border-radius:5px; border-style: solid; border-width: 3px;"></th>
            <th style="height:40px;width:40px; background-color:yellow; border-radius:5px; border-style: solid; border-width: 3px;"></th>
            <th style="height:40px;width:40px; background-color:yellow; border-radius:5px; border-style: solid; border-width: 3px;"></th>
        </tr>
        <tr style="height:40px">
            <th style="height:40px;width:40px; background-color:yellow; border-radius:5px; border-style: solid; border-width: 3px;"></th>
            <th style="height:40px;width:40px; background-color:yellow; border-radius:5px; border-style: solid; border-width: 3px;"></th>
            <th id="square" style="height:40px;width:40px; background-color:yellow; border-radius:5px; border-style: solid; border-width: 3px;"></th>
        </tr>
    */
}