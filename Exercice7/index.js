function convertToBinary() {
    const inputHTMLElement = document.getElementById('decimalInput')
    const resultHTMLElement = document.getElementById('binaryResult')

    if(Number(inputHTMLElement.value)){
        const inputValue = parseInt(inputHTMLElement.value,10)
        const binary = inputValue.toString(2)
        resultHTMLElement.innerHTML = binary
    }
}