

function isPalindrome(num){
    let output = 0
    let originalNum = num
    while(num > 0){
        const digit = num % 10
        output = (output * 10) + digit
        num = Math.floor(num/10)
    }

    if(originalNum === output){
        return true
    } else {
        return false
    }
}


console.log(isPalindrome(11)) // true