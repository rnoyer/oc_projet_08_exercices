function calculateAverage(numbersArray) {
    if(arguments.length != 1) {
        return 'No numbers to calculate average'
    }
    if(numbersArray.length > 0) {
        let sum = 0;
        const divider = numbersArray.length 
        for(let x of numbersArray){
            sum += Number(x)
        }
        return sum / divider
    }
    return 'No numbers to calculate average'
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
