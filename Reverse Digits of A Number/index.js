const readline = require('readline');

// Create an interface for reading input from the consoles
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for an integer input
rl.question('Enter an integer: ', (input) => {
    // Parse the input as an integer
    let n = parseInt(input);
    let reverseNumber = 0;
    while(n > 0){
        let number = n % 10;
        reverseNumber = (reverseNumber * 10 )+ number;
        n = Math.floor(n / 10);
    }
    console.log(reverseNumber);

    rl.close();
});
