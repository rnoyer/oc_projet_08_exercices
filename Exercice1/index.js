function pairNumbers(start, end){
    let result = ''
    for (let i = Number(start); i <= Number(end); i++) {
        if(i%2 === 0){
            if(i === Number(end)){
                result = result.concat(i)
                return result
            }
            result = result.concat(i,',')
        }
    }
    return result
}

export default pairNumbers
