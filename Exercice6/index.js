let calcDisplay = ''

function updateDisplayContent(element){
    calcDisplay = calcDisplay.concat(element)
    return calcDisplay
}

function appendToDisplay(elementToDisplay) {
    const actualContent = updateDisplayContent(elementToDisplay)

    const displayHTMLElement = document.getElementById('display')
    displayHTMLElement.setAttribute('value', actualContent)
}

function clearDisplay() {
    calcDisplay = ''
    const displayHTMLElement = document.getElementById('display')
    displayHTMLElement.setAttribute('value', calcDisplay)
}

function calculateResult() {
    let result = eval(calcDisplay)
    if(result == 'Infinity'){
        result = 'Division by zero is not allowed'
    }

    const displayHTMLElement = document.getElementById('display')
    displayHTMLElement.setAttribute('value', result)
}