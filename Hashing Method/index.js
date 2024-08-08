function hashingMethod(arr) {
    // Find the maximum value in the array
    let max = Math.max(...arr);
    
    // Create and initialize the hash array
    let has = new Array(max + 1).fill(0);
    console.log(has);
    
    // Populate the hash array with counts
    for (let i = 0; i < arr.length; i++) {
        has[arr[i]] += 1;
      
    }
    console.log(has);
    // Create a set to track seen numbers
    let seen = new Set();
    let answer = [];
    
    // Prepare the result array with unique counts in order of first appearance
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        if (!seen.has(number)) {
            answer.push(has[number]);
            seen.add(number);
        }
    }
    
    return answer;
}

// Example usage
console.log(hashingMethod([1, 2, 3, 3, 3, 3, 3, 3, 4]));
