// Insersion Sort : Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.

/*
Process:

Insertion sort is virtually split the array into sorted and unsorted part.

Assume that the first element is sorted and the rest are unsorted.

If the element in the sorted part is smaller than the selected element ,
proceed to the next element in the unsorted part. Else, shift larger element
in the sorted part towards the right.

Insert the selected element at the right index.

Repeat till all the unsorted element are placed in the right order.


*/


function insersiontSort(arr){

    for(let i = 1; i < arr.length; i++){
        let insertNum = arr[i];
        let j= i-1
        while(j>=0 && arr[j]>insertNum){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = insertNum
    
    }
    return arr



}


const arr = [12, 11, 13, 5, 6];
console.log(insersiontSort(arr)); // [5, 6, 11, 12, 13]
console.log(insersiontSort([-3,-6,1,5,3,2,0,4,-1])); // [-6,-3,-1,0,1,2,3,4,5]
console.log(insersiontSort([1,2,3,4,5,6,7,8,9])); // [1,2,3,4,5,6,7,8,9]
console.log(insersiontSort([9,8,7,6,5,4,3,2,1])); // [1,2,3,4,5,6,7,8,9]


// The worst case time complexity of insersion sort is O(n^2).

