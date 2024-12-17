package recursion;

import java.util.Scanner;

public class Recursion {
    // Method to print numbers from 1 to N using recursion
    public void printNos(int N) {
        if (N > 0) {
            printNos(N - 1);
            System.out.print(N + " ");
        }
    }

   public void printDSA(int N) {
        if(N > 0) {
           System.out.print("DSA" + " ");
           printDSA(N-1);
        } 
    }

    // Method to handle all input and logic
    public void execute() {
        Scanner sc = new Scanner(System.in);

        // Taking total test cases
        int T = sc.nextInt();
        while (T-- > 0) {
            int N;

            // Input N
            N = sc.nextInt();

            // Calling printNos() method
            // printNos(N);
            printDSA(N);
            System.out.println();
        }

        // Close the scanner
        sc.close();
    }
}
