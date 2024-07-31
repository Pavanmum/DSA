function extractDigits(ans) {
    let number = []

    while(ans > 0){
        let array = ans % 10
        number.push(array)
        ans = Math.floor(ans / 10) 
    }
    number.reverse()
    return number
}

console.log(extractDigits(12345)) // [5, 4, 3, 2, 1] before reverse

console.log(extractDigits(12345)) // [ 1, 2, 3, 4, 5 ] after reverse
