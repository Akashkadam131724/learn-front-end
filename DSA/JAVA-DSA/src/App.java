
import arrayeasey.Arrayeassy;

public class App {
  public static void main(String[] args) {
    // Print "Hello, World!" as the first output

    // // ---- basics of java ----
    // int result = printReturn();
    // System.out.println(result);

    // App app = new App();
    // app.printMyName();
    // Basics basic = new Basics();
    // basic.printBasics();
    // // -------------------------

    // --------------patterns------
    // Patterns pattern = new Patterns();
    // pattern one
    // pattern.nForestOne(4);
    // System.out.println();
    // pattern.nForestGPTOne(4);
    // System.out.println();
    // pattern.nForestWithWhileOne(6);

    // pattern two
    // pattern.nForestTwo(6);
    // pattern.nForestTwoReverse(6);

    // pattern three
    // pattern.nForestThree(3);
    // pattern.nForestThreeReverse(3);
    // pattern.nForestThreeWhileLoop(3);

    // pattern four
    // pattern.nForestFour(4);

    // pattern five
    // pattern.nForestFive(6);

    // pattern six
    // pattern.patternSix(3);

    // pattern seven
    // pattern.patternSeven(5);

    // pattern eight
    // pattern.patternEight(1);

    // pattern patternNine
    // pattern.patternNine(5);

    // pattern patternTen
    // pattern.patternTen(1);
    // System.out.println("----");
    // pattern.patternTen(5);

    // pattern eleven
    // pattern.patternEleven(5);

    // pattern twelve
    // pattern.patternTwelve(3);

    // pattern thirteen
    // pattern.patternThirteen(5); 

    // pattern fourteen 
    // pattern.patternFourteen(5);

    // pattern patternFifteen 
    // pattern.patternFifteen(5);

    // pattern patternSixteen 
    // pattern.patternSixteen(5); 

      // pattern patternSevenTeen 
    // pattern.patternSevenTeen(5); 

    // ----------

    // // ---------------recursion----------
    // // Creating an object of class Recursion and executing the logic
    // Recursion recursion = new Recursion();
    // recursion.execute();
    // // ------------------------

    // ------------Hashing--------------
    // Hashing hashing = new Hashing();
    // hashing.countElementInArrayBruteForce();

    // hashing.frequencyCount();

    // int[] paramArr = {2, 3, 2, 3, 5};
    // int N =5; int P =5;
    // int[] res = hashing.frequencyCountHashMap(paramArr, N , P);
    // System.out.println(Arrays.toString(res));

    // hashing.frequencyCountOptimal();

    // hashing.countFreq();

    // hashing.Frequency();

    // ------------- 

    // ---- sorting Arrays 
    // Sorting sorting = new Sorting();
    // sorting.selectionSort();
    // int[] myArr = {6, 2, 8, 4, 10};
    // sorting.bubbleSort(myArr, myArr.length);

    // ----------Array Easy
    Arrayeassy arrayeassy = new Arrayeassy();
    arrayeassy.printArray();

     
    int[] arr012 = {2,2,2,0,1,1,0,0,2};
    sort012(arr012);
  


  }

  public static void sort012(int[] arr){
    //Write your code here
    int count0 = 0; // 3
    int count1 = 0; // 3
    int count2 = 0; // 3

    for(int i= 0; i < arr.length; i++){
        if(arr[i] == 0) {
            count0++;
        }
        if(arr[i] == 1) {
            count1++;
        }
        if(arr[i] == 2) {
            count2++;
        }
    }

    for(int i = 0; i < count0; i++){
        arr[i] = 0;
    }

    for(int i = count0; i < count0 + count1; i++){
        arr[i] = 1;
    }

    for(int i = count0 + count1; i < arr.length; i++){
        arr[i] = 2;
    } 
    for (int i = 0; i < arr.length; i++) {
        System.out.print(arr[i] + " ");
    }
    
}


  // // ---------------------- Basics --------------------
  // public static void printHelloWorld(){
  // // we can call this static method in main method. main method is static
  // method
  // System.out.println("Hello, World!, learning Recursion... Update");
  // }

  // public static int printReturn() {
  // return 1;
  // }

  // public void printMyName(){ // main method is static so we can not call this
  // non-static method directly we have to create an object from main class
  // System.out.println("NON static method call form app instance");
  // }
  // // --------------------
}
