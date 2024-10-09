const myButton = document.getElementById('myButton')
myButton.addEventListener('click', () => {
    const myText = document.body.appendChild(document.createElement('p'))
    myText.innerHTML = 'Bonjour, vous avez cliqué sur le bouton !'
})