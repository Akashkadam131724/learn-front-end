// { Driver Code Starts
// Initial Template for javascript

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;
process.stdout.write("Hello from system ");

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim();
  main();
});

function readLine() {
  return inputString;
}
// } Driver Code Ends

class Solution {
  printNos(N) {
    if (N > 0) {
      this.printNos(N - 1);
      process.stdout.write(N + " ");
    }
  }
}

function main() {
  // Reading the input value

  let n = parseInt(readLine());

  // Creating an object of the Solution class and calling the printNos method
  let obj = new Solution();
  obj.printNos(n);
}
