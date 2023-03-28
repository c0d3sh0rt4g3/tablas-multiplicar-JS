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

function multiplicationTables(){
    for(let i = 0; i < 11; i++){
        document.write(givenNum + " * " + i + " = " + givenNum * i + "<br>")
    }
}