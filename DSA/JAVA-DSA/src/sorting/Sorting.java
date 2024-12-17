package sorting;

public class Sorting {

  // selection sort
  public void selectionSort(){
    int[] arr ={13,46,24,52,20,9};
    int n = arr.length;
    for(int i = 0; i < n - 1 ; i++){
      int mini = i;
        for(int j = i + 1; j < n; j++){
          if(arr[j] < arr[mini]){
            mini = j;
          }
        }
        int temp = arr[mini];  // Store the minimum element
        arr[mini] = arr[i];    // Place the current element at the position of the minimum element
        arr[i] = temp;         // Place the minimum element at the current position

    }
    System.out.println("print array");
    for(int i = 0; i < n; i++){
      System.out.println(
        arr[i]
      );
    }

    // for(int i =0;i<n-1;i++)
		// {
		// 	int smallest = arr[i];
		// 	int indx = -1;
		// 	for(int j = i+1;j<n;j++)
		// 	{

		// 		if(arr[j] < smallest)
		// 		{
		// 			smallest = arr[j];
		// 			indx = j;
		// 		}
		// 	}
		// 	if(indx !=-1){
		// 	int a = arr[i];
		// 	arr[i] = smallest;
		// 	arr[indx] = a;
		// 	}
		// }
  } 

  public void bubbleSort(int[] arr, int n) {   
    // Write your code here.
    int i = n - 1; 
    while(i >=0){
        for(int j = 0; j < i; j++){
            if(arr[j + 1 ] < arr[j]){
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i--;
    }
    
    for (int j = 0; j < arr.length; j++) {
        System.out.print(arr[j] + " ");
    }

}

  public void insertionSort(){
      int[] arr ={13,46,24,52,20,9};
      int n = arr.length;
      for (int i = 0; i <= n - 1; i++) {
        int j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            int temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
  }

 
	public  void mergeSort(int[] arr, int n) {
		int low = 0;
		int high = n - 1; 
		recursiveMerge(arr, low, high);	 
	}

	public void recursiveMerge(int[] arr, int low, int high) {
		if (low >= high) return;

		int mid = (low + high) / 2;

		// Recursively divide the array
		recursiveMerge(arr, low, mid);
		recursiveMerge(arr, mid + 1, high);

		// Merge the sorted halves
		mergeElements(arr, low, mid, high);
	}

	public void mergeElements(int[] arr, int low, int mid, int high) {
		// Temporary array to hold merged elements
		int[] temp = new int[high - low + 1];
		int currentIndex = 0;
		int left = low;
		int right = mid + 1;

		// Merge the two halves
		while (left <= mid && right <= high) {
			if (arr[left] <= arr[right]) {
				temp[currentIndex++] = arr[left++];
			} else {
				temp[currentIndex++] = arr[right++];
			}
		}

		// Copy remaining elements from the left half, if any
		while (left <= mid) {
			temp[currentIndex++] = arr[left++];
		}

		// Copy remaining elements from the right half, if any
		while (right <= high) {
			temp[currentIndex++] = arr[right++];
		}

		// Copy the merged elements back into the original array
		for (int i = 0; i < temp.length; i++) {
			arr[low + i] = temp[i];
		}
	}


	public void quickSort(){
		// pick a pivot element and place it at its correct position
		// smaller elements than pivot goes left to pivot element
		// greater elements than pivot goes right to pivot element
		
		
		// int[] arr = {4,6,2,5,7,9,1,3};
	}
}
