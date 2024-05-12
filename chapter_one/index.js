// Given a number n , find the n elements of the Fibonacci sequence.
// Determine the big O of your solution.


function fibonacci(n){
    const fib = [0,1];
    for(let i=2;i<n;i++){

        fib[i] = fib[i-1] + fib[i-2]

    }

    return fib
}


console.log(fibonacci(3))



// Linear time complexity O(n) = Big O(n)
