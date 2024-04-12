const calcInpt = document.querySelector("#calc-input")
const calcAddBtn = document.querySelector("#add-btn")
const calcSubtractBtn = document.querySelector("#subtract-btn")
const calcMultiplyBtn = document.querySelector("#multiply-btn")
const calcDivideBtn = document.querySelector("#divide-btn")
const calcClearBtn = document.querySelector("#clear-btn")
const calcCalculationSpan = document.querySelector(".calculator-screen__calculation")
const calcResultSpan = document.querySelector(".calculator-screen__result")
const calcLog = []

function writeToLog(op, prevRes, usrInpt, currRes){
    const logEntry = {
        operator: op,
        prevResult: prevRes,
        userInput: usrInpt,
        result: currRes
    }
    calcLog.unshift(logEntry)
    console.log(calcLog)
}

function writeOuput(op, prevRes, usrInpt, currRes){
    calcCalculationSpan.textContent = `${prevRes} ${op} ${usrInpt}`;
    calcResultSpan.textContent = currRes
    writeToLog(op, prevRes, usrInpt, currRes)
}

function reset(){
    calcCalculationSpan.textContent = '';
    calcResultSpan.textContent = ''
    calcInpt.value = ''
}