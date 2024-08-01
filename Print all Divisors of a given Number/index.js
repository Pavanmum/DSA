

function printDivisors(n) {
    
    let sum = [];

    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            sum.push(i)
        }
    }
    return sum
}

console.log(printDivisors(36)) // [ 1, 3, 5, 15 ]