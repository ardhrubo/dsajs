/*
Problem: Tower of hanoi problem

The obejective of the puzzle is to move the entire stack to 
the last rod, obeying the following simple rules:
Only one disk may be moved at a time.
Each move consists of taking the upper disk from one of the stacks
and placing it on top of another stact or on an empty rod.
And lastly,
No disk may be placed on top of a smaller disk.


*/



function towerOfHanoi(n,fromRod,toRod,usingRod){
    if(n==1){
        console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`)
        return
    }

    towerOfHanoi(n-1,fromRod,usingRod,toRod)
    console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`)
    towerOfHanoi(n-1,usingRod,toRod,fromRod)



}




towerOfHanoi(3,'A','C','B') // Here A is the source rod, B is the auxiliary rod and C is the destination rod.

towerOfHanoi(4,'A','C','B') // Here A is the source rod, B is the auxiliary rod and C is the destination rod.

// The time complexity of the above alogrithm is 2^n . 
// The space complexity of the above alogrithm is O(n) as we are using recursion.
// Big-O-Notation: O(2^n)
