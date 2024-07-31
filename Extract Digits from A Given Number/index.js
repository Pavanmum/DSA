
// # Extract Digits from A Given Number ! Complexity Analysis is  O(log10N + 1) its a worst method to extract digits from a number

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




// ! best method to extract digits from a number complexity is O(1)

function PageTransitionEvent(n){
    let number = Math.floor(Math.log10(n) + 1)
    return number
}

console.log(PageTransitionEvent(12345)) // 5