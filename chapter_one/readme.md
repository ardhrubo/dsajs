## Big-O Notation


What is worst case time complexity ?

The worst case complexity of an algorithm is represented using the Big-O notation

Big O notation describes the complexity of an algorithm using algebraic terms

It has two important characacteristics

It is expressed in the terms of the input

It focuses on the bigger picture without caught up in the minute details 


### Big O Time complexity

```
function sum(n){
    let sum = 0;
    for(let i =1; i<=n; i++>){
        sum += i;
    }
    return sum
}

```

It executed 6 times for n = 4

So the time complexity is n+2

So, as it focuses in the bigger picture then

we can refer n+2 is equal to n;

So the O(n) - Linear

So the time complexity is linear.



