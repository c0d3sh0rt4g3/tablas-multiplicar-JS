let givenNum = 0
function checkNum(){
    givenNum = parseFloat(document.getElementById("num").value)
    if (givenNum){
        if (givenNum % 1 === 0){
            if (givenNum >= 0){
                multiplicationTables(givenNum)
            }else {alert("The number introduced it's not positive.")}
        }else{alert("The number introduced is not an integer.")}
    }else {alert("You didn't introduced a number.")}
}

function multiplicationTables(givenNum){
    let tabla = document.getElementById("multiplicationTable");
    tabla.innerHTML = ""; // Limpiamos la tabla antes de generar una nueva

    document.getElementById("tableTitle").textContent = `Tabla del ${givenNum}`
    for(let i = 0; i < 11; i++){
        tabla.innerHTML += `<div class="tabla-elemento">${givenNum}</div>
                             <div class="tabla-elemento">*</div>
                             <div class="tabla-elemento">${i}</div>
                             <div class="tabla-elemento"> = </div>
                             <div class="tabla-elemento">${givenNum * i}</div>`;
    }
}



