package patterns;

//https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/
public class Patterns { 
  // pattern one 
  /* 
    * * * 
    * * * 
    * * * 
  */

  public void nForestOne(int n){
    int i = n; 
    int  j = n; // issue here j will become 0 after i became 3
    while(i > 0){
      while(j > 0){
        System.out.print("* ");
        j = j - 1;
      } 
      i = i - 1;
      System.out.println();
    }
  }  
  
  public void nForestGPTOne(int n) {
    int i = n; 
    int j;
    while (i > 0) {
        j = n; // Reset j for each row
        while (j > 0) {
            System.out.print("* ");
            j = j - 1;
        }
        i = i - 1;
        System.out.println(); // Move to the next line after each row
    }
  } 

  public void nForestWithWhileOne(int n){
    int i = 0; 
    while (i<n){
      int j = 0;
      while(j<n){
        j++;
        System.out.print("* ");
      }
      System.out.println();
      i++;
    }
  }

  // pattern two 
  /*
    * 
    * *
    * * *
  */

  public void nForestTwo(int n){
    int i = 0; 
    while(i < n){
      int j = 0;
      while(j <= i){
        System.out.print("* ");
        j++;
      }
      i++;
      System.out.println();
    }
  } 

  public void nForestTwoReverse(int n){
    int i = n;
    while(i > 0){
      int j = 0;
      while(j < n - i + 1){
        System.out.print("* ");
        j++;
      }
      i--;
      System.out.println();
    }
  } 

  // pattern three
  /* 
    1
    1 2 
    1 2 3
  */ 

  public void nForestThree(int n ){
    for(int i = 0; i < n; i++){
      for(int j = 0; j < i + 1; j++){
        System.out.print(j + 1 + " ");
      }
      System.out.println();
    }
  }
  public void nForestThreeReverse(int n ){
    //  for(int i = n; i > 0; i--){
    //   for(int j = n; j > i + 1; j-- ){
    //     System.out.print(  i + ", " + j + " ");
    //   } 
    //   System.out.println();

    //  } // not working
  }
  public void nForestThreeWhileLoop(int n ){
     int i = 0 ; 
     while(i < n){
        int j = 0; 
        while(j < i+1){
          System.out.print(j+1 + " "); 
          j++;
        }
      i++;
      System.out.println();
     }
  } 

  // pattern four 
  /*
    1
    2 2 
    3 3 3
  */ 

  public void nForestFour (int n) {
    int i = 0 ; 
        while(i < n){
            int j = 0; 
            while(j < i+1){
            System.out.print(i+1 + " "); 
            j++;
            }
        i++;
        System.out.println();
        }
    } 

    // pattern five 
    /*
      * * *
      * * 
      *
     */

    public void nForestFive (int n) {
      for(int i = 0; i < n; i++){
        for(int j=n-i; j > 0; j--){
          System.out.print("* ");
        }
        System.out.println();
      }
    } 

    // pattern six
/* 
    1 2 3
    1 2
    1 
*/
    public void patternSix(int n){
      int i = 0; 
      while(i < n){
        int j = 0;
        while(j < n - i){
          System.out.print(j + 1 + " ");
          j++;
        }
        i++;
        System.out.println();
      }
    }

  // pattern seven 
  /* 
     *
    ***
   *****
   */  

  public void patternSeven(int n){
      for(int i = 0; i < n; i++){
              
        for(int j = 0; j < n - (i + 1); j++){
            System.out.print(" ");
        }

        for(int j = 0; j < 2 * i + 1; j++){
            System.out.print("*");
        }
        
        for(int j = 0; j < n - (i + 1); j++){
            System.out.print(" ");
        } 

        System.out.println();
    }
  }

  // pattern eight 
    /* 
     *****  
      ***
       *  
     */

     public void patternEight(int n){
      for(int i= 0; i < n; i++){
        for(int j=0; j < i; j++){
          System.out.print(" ");
        }
        for(int j=0; j < 2 * n -(2 * i + 1); j++){
          System.out.print("*");
        } 
        for(int j=0; j < i; j++){
          System.out.print(" ");
        } 
        System.out.println();
      }
     } 

     /* 
       *  
      ***
     ***** 
     *****  
      ***
       *  
      */ 

      public void patternNine(int n){
        patternSeven(n);
        patternEight(n);
      } 

      // pattern ten 
      /* 
      // N = 3
        *  
        **
        ***  
        **
        *
       */ 

      public void patternTen(int n){
        int rows  = n == 1 ? 1 : 2 * n - 1;
        for(int i = 0; i < rows ; i++){
            int col = i + 1;   
            if(i >= n) {
              col = 2 * n - i - 1;
            }

            for(int j = 0; j < col; j++){
              System.out.print("*");
            }
            System.out.println();
        }
      }

      // pattern eleven  
       public void patternEleven(int n){
          for(int i = 0; i < n; i++){
            for(int j = 0; j < i + 1; j++){
                if(i % 2 == 0){
                    System.out.print((j + 1) % 2 == 0 ? "0 " : "1 ");
                } else {
                    System.out.print( (j + 1) % 2 == 0 ? "1 " : "0 ");
                }
             } 
             System.out.println();
          }
      }

      // pattern twelve 
      public void patternTwelve(int n) {
        // Write your code here.
        for(int i = 0; i<n; i++){
            //numbers
            for(int j = 0; j < i + 1; j ++){
                System.out.print(j + 1 + " ");
            } 

            // spaces  
            for(int j = 0; j < 2 * n - 2 * (i + 1); j++) {
              System.out.print(" ");
            }


            // numbers

            for(int j = i + 1; j > 0; j--) {
                System.out.print(j + " ");
            } 
            System.out.println();
        }
    }

      // pattern twelve  
      /*
       1
       2 3
       .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................4 5 6
       */
      public void patternThirteen(int n){
        int temp = 0; 
        for(int i = 0; i < n; i++){
          for(int j = 0; j < i + 1; j++){
            System.out.print( temp + j + 1 + " "); 
            if(j == i){
              temp = temp + j + 1;
            }
          }
          System.out.println();
        }
      } 

      public void pattern13(int n){
        // starting number.
        int num =1;
      
        // Outer loop for the number of rows.
      for(int i=1;i<=N;i++){
          // Inner loop will loop for i times and
          // print numbers increasing by 1 each time.
          for(int j=1;j<=i;j++){
              System.out.print(num + " ");
              num =num+1;
          }
          // As soon as the numbers for each iteration are printed, we move to the
          // next row and give a line break otherwise all numbers
          // would get printed in 1 line.
          System.out.println();
        }
     }

      public void patternFourteen(int n){
        for(int i = 0; i < n; i++){
          for(char j = 'A'; j < 'A'+i+1; j++){
            System.out.print(j + " ");
          }
          System.out.println();
        }
      } 

      public void patternFifteen(int n){
        for(int i = 0; i < n; i++){
          for(char j = 'A'; j < 'A' + n - i; j++){
            System.out.print(j + " ");
          }
          System.out.println();
        }
      }

      public void patternSixteen(int n){
        for(int i = 0; i < n; i++){
          char c = (char)((int)('A'+i));
          for(int j = 0; j < i + 1; j++){
               System.out.print(c + " ");
          }
          System.out.println();
      }
      }
      
      public void patternSevenTeen(int n){
        for(int i = 0; i < n; i++){
          // spaces
          for(int j = 0; j < n - (i + 1); j++) {
              System.out.print(" ");
           } 
          char c = 'A'; 
          
           for(int j = 0; j < 2 * i + 1; j++){
              System.out.print(c + " "); 
              if(j < i) c++;
              else c--;
           }

          // spaces
           for(int j =0; j < n - (i + 1); j++) {
              System.out.print(" ");
          }

          System.out.println();
        } 
      }
}

