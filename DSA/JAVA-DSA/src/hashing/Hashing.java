package hashing;

import java.util.HashMap;
import java.util.Map; 

//https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0

public class Hashing {
  public void countElementInArrayBruteForce() {
      int[] arr  = {2,1,3,5,6,89}; 
      int element = 89;
      int count = 0;
        for (int i=0; i<arr.length; i++){
          if(arr[i] == element){
            count++;
        }
      }
      System.out.println(element + " count is " + count);
  }

  //Function to count the frequency of all elements from 1 to N in the array.
    // 1st Approach: Using Extra Space - Time Complexity = O(N), Space Complexity = O(N)
    public void frequencyCount() {
        // params int arr[], int N, int P;
        // Initialize the result array to store frequency counts, with size n
        int arr[] = {2, 3, 2, 3, 5};
        int N =5; int P =5;

        int[] temp = new int[N];
        
        // Traverse each element in arr to count the frequency of values from 1 to N
        for (int i = 0; i < N; i++) {
            // Only consider elements that are within the range 1 to n
            if (arr[i] <= N) {
                // Increment the frequency count for the element (arr[i] - 1)
                temp[arr[i] - 1]++;
            }
        }
        
        // Update the original array arr with frequency counts from the result array
        for (int i = 0; i < N; i++) {
            // Set arr[i] to the frequency count of (i + 1) found in the result array
            arr[i] = temp[i];
        }
        for (int i = 0; i < temp.length; i++) {
            // print results array
            System.out.println(temp[i] + " ");
        }
    }
 
    // 2nd Approach: Using Map - Time Complexity = O(N), Space Complexity = O(P)
    public void frequencyCountMap() { 
      // params int arr[], int N, int P;
        int arr[] = {2, 3, 2, 3, 5};
        int N =5; int P =5;
 
      // Create a frequency array to count occurrences, size P+1 to handle 1-based indexing
      int[] freq = new int[P + 1];
  
      // Count the frequency of each element in arr
      for (int i = 0; i < N; i++) {
          // Increment the count for the current element
          freq[arr[i]]++;
      } 

      for (int i = 0; i < freq.length; i++) {
       // print frequency array;
        System.out.println("frquecyArryay " + i+ " " + freq[i] + " ");
      }
  
      // Update the original array with the frequency counts
      for (int i = 0; i < N; i++) {
          // If the index is greater than P, set frequency to 0
          if (i >= P) {
              arr[i] = 0;
          } else {
              // Set the frequency of (i + 1) in the array
              arr[i] = freq[i + 1];
          }
      } 

      for (int i = 0; i < arr.length; i++) {
        // print modified array;
         System.out.println("arr " + i +  " " + arr[i] + " ");
       }
  } 

   
    // 3rd Approach: Using HashMap - Time Complexity = O(N), Space Complexity = O(P)
    public  int[] frequencyCountHashMap(int arr[], int N, int P) {
        // Create a HashMap to store frequency of each element
        HashMap<Integer, Integer> hm = new HashMap<>();
        
        // Count occurrences of each element in arr
        for (int i = 0; i < N; i++) {
            // If the element is already in the map, increment its count
            if (hm.containsKey(arr[i])) {
                hm.put(arr[i], hm.get(arr[i]) + 1);
            } else {
                // Otherwise, add the element with count 1
                hm.put(arr[i], 1);
            }
        }
        
        // for (Map.Entry<Integer, Integer> it : hm.entrySet()) {
        //     System.out.println(it.getKey() + ": " + it.getValue());
        // }
    
        // Update the array with frequency counts from the map
        for (int i = 0; i < N; i++) {
            // Check if the number (i + 1) is in the map
            if (hm.containsKey(i + 1)) {
                // Set the frequency of (i + 1) in the array
                arr[i] = hm.get(i + 1);
            } else {
                // If not found, set the frequency to 0
                arr[i] = 0;
            }
        } 

        return arr;
    } 

     
    // 4th Approach: Optimal Approach - Time Complexity = O(N), Space Complexity = O(1)
    public  void frequencyCountOptimal() {
        // params int arr[], int N, int P;
        int arr[] = {2, 3, 2, 3, 5};
        int N =5; int P =5;
        // Decrease all elements by 1 to make them 0-indexed
        for (int i = 0; i < N; i++) {
            arr[i] -= 1;
        }
    
        // Count frequencies by using the array elements as indices
        for (int i = 0; i < N; i++) {
            // Check if the current element is within the range [0, N-1]
            if (arr[i] % P < N) {
                // Increment the value at the index corresponding to the element value
                arr[arr[i] % P] += P;
            }
        }
    
        // Calculate the actual frequency counts
        for (int i = 0; i < N; i++) {
            // Divide by P to get the frequency of each element
            arr[i] = arr[i] / P;
        }
    } 

 // 5th approach
 // Time Complexity: O(N*N) Space Complexity:  O(N)
  public  void countFreq( ){ 
    int arr[] ={10,5,10,15,10,5};
    int n = arr.length;
  
    boolean visited[] = new boolean[n]; 

     for (int i = 0; i < n; i++) {
        // Skip this element if already processed
        if (visited[i] == true)
            continue;

        // Count frequency
        int count = 1;
          for (int j = i + 1; j < n; j++) {
              if (arr[i] == arr[j]) {
                  visited[j] = true;
                  count++;
              } 
          }
      System.out.println(arr[i] + " " + count);
    }
  } 

  // 6th approach
  // Time Complexity: O(N) Space Complexity: O(n)
  public void Frequency( ){
    int arr[] = {10,5,10,15,10,5};
    int n = arr.length;
    Map<Integer, Integer> map = new HashMap<>();
 
    for (int i = 0; i < n; i++)
    {
        if (map.containsKey(arr[i]))
        {
            map.put(arr[i], map.get(arr[i]) + 1);
        }
        else
        {
            map.put(arr[i], 1);
        }
    }
    // Traverse through map and print frequencies
    for (Map.Entry<Integer,Integer> entry : map.entrySet())
    {
        System.out.println(entry.getKey() + " " + entry.getValue());
    }
  }

    

}
