let currRes = 0
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

function addBtnHandler(){
    const userInpt = +calcInpt.value
    let resultBeforCalc = currRes
    currRes += +userInpt
    writeOuput('+', resultBeforCalc, userInpt, currRes)
    writeToLog('+', resultBeforCalc, userInpt, currRes)
}

function subtractBtnHandler(){
    const userInpt = +calcInpt.value
    let resultBeforCalc = currRes
    currRes -= +userInpt
    writeOuput('-', resultBeforCalc, userInpt, currRes)
    writeToLog('-', resultBeforCalc, userInpt, currRes)
}

function multiplyBtnHandler(){
    const userInpt = +calcInpt.value
    let resultBeforCalc = currRes
    currRes *= +userInpt
    writeOuput('x', resultBeforCalc, userInpt, currRes)
    writeToLog('x', resultBeforCalc, userInpt, currRes)
}

function divideBtnHandler(){
    const userInpt = +calcInpt.value
    let resultBeforCalc = currRes
    currRes /= +userInpt
    writeOuput('/', resultBeforCalc, userInpt, currRes)
    writeToLog('/', resultBeforCalc, userInpt, currRes)
}

calcAddBtn.addEventListener('click', addBtnHandler)
calcSubtractBtn.addEventListener('click', subtractBtnHandler)
calcMultiplyBtn.addEventListener('click', multiplyBtnHandler)
calcDivideBtn.addEventListener('click', divideBtnHandler)
calcClearBtn.addEventListener('click', reset)