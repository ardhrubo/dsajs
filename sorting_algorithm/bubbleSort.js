// Bubble Sort

// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

// Problem: Given an array of integers, sort the array.
// const arr = [-3,-6,1,5,3,2,0,4,-1];

// bubbleSort(arr)=> should return [-6,-3,-1,0,1,2,3,4,5]


function bubbleSort(arr){

    let swapping;

    do{
        swapping = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapping = true;
            }
        }

    }while(swapping);

    return arr;

}


console.log(bubbleSort([-3,-6,1,5,3,2,0,4,-1])); // [-6,-3,-1,0,1,2,3,4,5]
console.log(bubbleSort([1,2,3,4,5,6,7,8,9])); // [1,2,3,4,5,6,7,8,9]
console.log(bubbleSort([9,8,7,6,5,4,3,2,1])); // [1,2,3,4,5,6,7,8,9]
console.log(bubbleSort([1,3,5,7,9,2,4,6,8])); // [1,2,3,4,5,6,7,8,9]


// The worst case time complexity of bubble sort is(n^2). The best case time complexity is O(n) when the array is already sorted. The average time complexity is O(n^2). The space complexity is O(1) because an extra variable is used for swapping.










