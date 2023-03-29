let givenNum = 0
function checkNum(){
    givenNum = parseFloat(document.getElementById("numTextField").value)
    if (givenNum){
        if (givenNum.toString().length <=5){
            if (givenNum % 1 === 0){
                if (givenNum >= 0){
                    multiplicationTables(givenNum)
                }else {alert("The number introduced it's not positive.")}
            }else{alert("The number introduced is not an integer.")}
        }else{alert("The maximum legnth accepted of the number introduced would be 5.")}
    }else {alert("You didn't introduced a number.")}
}

function multiplicationTables(){
    let table = document.getElementById("multiplicationTable");
    document.getElementById("tableTitle").textContent = `Tabla del ${givenNum}`
    table.innerHTML = "";
    for(let i = 0; i < 11; i++){
        table.innerHTML += `<div class="tableElement">${givenNum}</div>
                             <div class="tableElement">*</div>
                             <div class="tableElement">${i}</div>
                             <div class="tableElement"> = </div>
                             <div class="tableElement">${givenNum * i}</div>`
    }
}



