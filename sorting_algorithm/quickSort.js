// Quick Sort


/*
Quick Sort Process:
Pick the first element as pivot.
Pick the last element as pivot.
Pick a random element as pivot.
Pick the middle element as pivot.

Put everything that's smaller than the pivot into a 'left' array
and everything graeter than the pivot into a'right' array.

Repeat the process for the individual left and right arrays till
you have an array of length 1.

Repeatedly concatenate the left array, the pivot, and the right array
till one sorted remains.


*/

function quickSort(arr){
 
 let pivot = arr[arr.length-1]   

 let left = [];
 let right = [];

 for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }
    else{
        right.push(arr[i])
    }
 }

return [...left,pivot,...right]


}



console.log(quickSort([-6,20,8,-2,4])); // [-6,-2,4,8,20]
console.log(quickSort([-3,-6,1,5,3,2,0,4,-1])); // [-6,-3,-1,0,1,2,3,4,5]
console.log(quickSort([1,2,3,4,5,6,7,8,9])); // [1,2,3,4,5,6,7,8,9]
console.log(quickSort([9,8,7,6,5,4,3,2,1])); // [1,2,3,4,5,6,7,8,9]
console.log(quickSort([1,3,5,7,9,2,4,6,8])); // [1,2,3,4,5,6,7,8,9]




