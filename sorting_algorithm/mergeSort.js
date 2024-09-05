// Merge Sort

// Merge Sort is a Divide and Conquer algorithm. 
// It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. 
// The merge() function is used for merging two halves. 
// The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.



// Steps in Merge Sort:

/*
Dived the array into sub arrays, each containing one element.

Repeatedly merge the sub arrays to produce new sorted sub arrays till
there is only one sub array remaining.

That will be the sorted array.

*/


function mergeSort(arr){
    if(arr.length <2){
        return arr;
    }

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
    

}


function merge(left,right){
    let sortArr = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortArr.push(left.shift())

        }else{
            sortArr.push(right.shift())
        }
    }
    return [...sortArr,...left,...right]
}





console.log(mergeSort([-6,20,8,-2,4])); // [-6,-2,4,8,20]
console.log(mergeSort([-3,-6,1,5,3,2,0,4,-1])); // [-6,-3,-1,0,1,2,3,4,5]
console.log(mergeSort([1,2,3,4,5,6,7,8,9])); // [1,2,3,4,5,6,7,8,9]
console.log(mergeSort([9,8,7,6,5,4,3,2,1])); // [1,2,3,4,5,6,7,8,9]






