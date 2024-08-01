
// # its a simple problem to find the gcd of two numbers But Time Complexity: O(min(N1, N2)) where N1 and N2 is the input number. The algorithm iterates from 1 to the minimum of N1 and N2 and each iteration checks whether both the numbers are divisible by the current number (constant time operations).

// # Space Complexity: O(1)as the space complexity remains constant and independent of the input size. Only a fixed amount of memory is required to store the integer variables.
function gcd(a,b){

    gcd = 0;

    for(let i = 0; i <= Math.min(a,b); i++){

        if(a % i === 0 && b % i === 0){
            gcd = i
        }
    }
    return gcd
}

console.log(gcd(12, 15)) // 3


// ? Pending
function gds(a,b){
    while(a>0 && b>0){
        if(a>b){
            a= a%b
            console.log(a)
        } else {
            b = b%a
            console.log(b)

        }

          // if so, return b as the GCD
    if (a === 0) {
        console.log("assab",b)
        return b;
    }
        console.log(a)
        return a
    }
}

console.log("gkgjhk",gds(12, 15))