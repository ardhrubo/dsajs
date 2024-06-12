// Fibonacci solution in a recursive way

// Lets's break down the problem in a smaller problem

// Fn = Fn-1 + Fn-2 where F0 = 0 and F1 = 1
// It represents the sum of the two numbers before the current number



function recursiveFibonaci(n) {

    if(n<2){
        return n
    }

    return recursiveFibonaci(n-1) + recursiveFibonaci(n-2);
}


console.log(recursiveFibonaci(0)) // 0
console.log(recursiveFibonaci(2)) // 1
console.log(recursiveFibonaci(3)) // 2
console.log(recursiveFibonaci(4)) // 3
console.log(recursiveFibonaci(10)) // 55


// The time complexity of this solution is O(2^n) because we are calling the function twice in each call


// Find the factorial of the number in a recursive way

function recursiveFactorial(n){
    if(n<=1){
        return 1;
    }

    return n  * recursiveFactorial(n-1);

}

console.log(recursiveFactorial(0)) // 1
console.log(recursiveFactorial(1)) // 1
console.log(recursiveFactorial(2)) // 2
console.log(recursiveFactorial(3)) // 6
console.log(recursiveFactorial(4)) // 24





