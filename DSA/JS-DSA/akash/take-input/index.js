const readline = require("readline-sync");

// Driver Code
function main() {
  // Read number of test cases
  let t = parseInt(readline.question("Enter number of test cases: "));

  // Loop through each test case
  for (let i = 0; i < t; i++) {
    let input_line = readline
      .question("Enter space-separated integers: ")
      .split(" ")
      .map(Number);

    // Create an instance of the Solution class
    let obj = new Solution();

    // Get the result by calling the countCoPrime function
    let ans = obj.countCoPrime(input_line);

    // Output the result
    console.log(ans);
  }
}

// User function Template for javascript
class Solution {
  countCoPrime(arr) {
    // Your logic here
    return arr;
  }
}

// Call the main function to start the process
main();
