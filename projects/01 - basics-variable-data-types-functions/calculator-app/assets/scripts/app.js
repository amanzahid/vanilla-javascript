let currRes = 0
function addBtnHandler(){
    const userInpt = +calcInpt.value
    let resultBeforCalc = currRes
    currRes += +userInpt
    writeOuput('+', resultBeforCalc, userInpt, currRes)
    calcInpt.value = ''
    calcInpt.focus()
}

function subtractBtnHandler(){
    const userInpt = +calcInpt.value
    let resultBeforCalc = currRes
    currRes -= +userInpt
    writeOuput('-', resultBeforCalc, userInpt, currRes)
    calcInpt.value = ''
    calcInpt.focus()
}

function multiplyBtnHandler(){
    const userInpt = +calcInpt.value
    let resultBeforCalc = currRes
    currRes *= +userInpt
    writeOuput('x', resultBeforCalc, userInpt, currRes)
    calcInpt.value = ''
    calcInpt.focus()
}

function divideBtnHandler(){
    const userInpt = +calcInpt.value
    let resultBeforCalc = currRes
    currRes /= +userInpt
    writeOuput('/', resultBeforCalc, userInpt, currRes)
    calcInpt.value = ''
    calcInpt.focus()
}

calcAddBtn.addEventListener('click', addBtnHandler)
calcSubtractBtn.addEventListener('click', subtractBtnHandler)
calcMultiplyBtn.addEventListener('click', multiplyBtnHandler)
calcDivideBtn.addEventListener('click', divideBtnHandler)
calcClearBtn.addEventListener('click', reset)