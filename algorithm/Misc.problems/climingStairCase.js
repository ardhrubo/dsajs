/*
Climbing Staircase
Problem: Given a staircase of 'n' steps, count the number of distinct ways to climb to the top.
You can either climb 1 or 2 steps at a time.

n =1, climibingStaircase(n) => 1  | 1
n =2, climibingStaircase(n) => 2  | 1,1 or 2
n =3, climibingStaircase(n) => 3  | 1,1,1 or 1,2 or 2,1
n =4, climibingStaircase(n) => 5  | 1,1,1,1 or 1,1,2 or 1,2,1 or 2,1,1 or 2,2


At any given time, you can climb either 1 step or 2 steps.
If you have to climb n steps, you can either climb n-1 steps and
or n-2 steps.


*/


function climibingStaircase(n){

    const noOfWays = [1,2]

    for(let i=2;i<n;i++){
        noOfWays[i] =  noOfWays[i-1] + noOfWays[i-2]
    }



    return noOfWays[n-1]

}



console.log(climibingStaircase(1)) // 1
console.log(climibingStaircase(2)) // 2


// The time complexity of this algorithm is O(n)
// The Big O(n) for this algorithm is O(n)


