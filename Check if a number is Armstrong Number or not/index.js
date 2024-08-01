

function armstrongNumber(num) {

    let stringNum = String(num).length

    let sum = 0

    let n =num 

    while(n>0){
        let Id = n%10
        sum += Math.pow(Id, stringNum)
        n = Math.floor(n/10)
    }
    return sum === num
}

console.log(armstrongNumber(153)) // true