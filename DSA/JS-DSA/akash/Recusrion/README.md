# Print Numbers Recursively

This repository contains a simple recursive implementation to print numbers from 1 to N without using loops. The solution is provided in both Java and JavaScript.

## Problem Description

Write a function that prints numbers from 1 to N using recursion. The function should not use any loops.

### Expected Time Complexity

- **O(N)**

### Expected Auxiliary Space

- **O(N)** (due to the recursion stack)

## Java Solution

The `printNos` function is implemented in Java. The function takes an integer `N` as input and prints the numbers from 1 to N using recursion.

### Java Implementation

```java
class Solution {
    public void printNos(int N) {
        if (N > 0) {
            printNos(N - 1);
            System.out.print(N + " ");
        }
    }
}
```
