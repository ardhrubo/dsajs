/*
Two search algorithm
linear search and binary search
linear search

*/

// Problem statement


/*

Given an array of n elements and a target element t, find the index of t in the 
array using a linear search algorithm. If t is not present in the array, return -1.

*/



function linearSearch(arr,target){

    for(let i=0; i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
       
    }
    return -1

}




console.log(linearSearch([1,2,3,4,5], 3)) // 2
console.log(linearSearch([1,2,3,4,5], 6)) // -1
console.log(linearSearch([1,2,3,4,5], 1)) // 0


// the time complexity of the function is O(n). Because a for loop is used.

// Binary search


/* 

Given a sorted array of n elements and a target element t, find the index of t
in the array. Return -1 if the target element is not found.

*/

// Approach Psedudocode
/* 
If the array is empty, return -1 as the element can not be found.

If the array has elements find the middle element in the array. If the target is
equal to the middle element, return the middle element index.

If the target is less than the middle element, binary search left half of the array.

If the target is greater than the middle element,binary search right half of the array.


*/




function binarySearch(arr,target){

let leftIndex = 0
let rightIndex = arr.length-1

while(leftIndex<=rightIndex){
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(target===arr[middleIndex]){
        return middleIndex
    }
    if(target<arr[middleIndex]){
        rightIndex = rightIndex -1
    } else {    

        leftIndex = middleIndex+1
    }

}

return -1


}




console.log(binarySearch([1,2,3,4,5], 3)) // 2
console.log(binarySearch([1,2,3,4,5], 6)) // -1
console.log(binarySearch([1,2,3,4,5], 1)) // 0
console.log(binarySearch([-11,3,4,6,7,8,9],7)) // 5

// Big-O - O(logn)
// The time complexity of the function is O(logn) as we iterate the array using while loop and inside the while loop the input size is reduced by half in every iteration.


// Recursive solution for binary search.

// Approach Psedudocode
/* 
If the array is empty, return -1 as the element can not be found.

If the array has elements find the middle element in the array. If the target is
equal to the middle element, return the middle element index.

If the target is less than the middle element, binary search left half of the array.

If the target is greater than the middle element,binary search right half of the array.

*/





function recursiveBinarySearh(arr,target){

    return search(arr , target, leftIndex=0, rightIndex=arr.length-1)

}


function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }
    if(target<arr[middleIndex]){
        return search(arr,target,leftIndex,middleIndex-1)
    }else{
       return search(arr,target,middleIndex+1,rightIndex)
    }

}


console.log(recursiveBinarySearh([1,2,3,4,5], 3)) // 2
console.log(recursiveBinarySearh([1,2,3,4,5], 6)) // -1
console.log(recursiveBinarySearh([1,2,3,4,5], 1)) // 0
console.log(recursiveBinarySearh([-11,3,4,6,7,8,9],7)) // 5


// Big-O = O(logn)
// The time complexity is O(logn) as the input size is reduced by half in every iteration;
// Fun fact though we don't use a foor loop  but we are calling the fucntion again and again to iterate.



