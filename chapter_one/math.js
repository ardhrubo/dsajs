// Given a number n , find the n elements of the Fibonacci sequence.
// Determine the big O of your solution.


function fibonacci(n){
    const fib = [0,1];
    for(let i=2;i<n;i++){

        fib[i] = fib[i-1] + fib[i-2]

    }

    return fib
}


console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(4)) // [0,1,1,2]
console.log(fibonacci(10)) // [0,1,1,2,3,5,8,13,21,34]



// Linear time complexity O(n) = Big O(n)



// Given an integer n, write a function that returns the factorial of the number.   


function factorial(n){
    let result = 1;

    for(let i=2;i<=n;i++){
        result *= i;
    }

    return result

}


console.log(factorial(3)) // 6
console.log(factorial(4)) // 24
console.log(factorial(5)) // 120

// Linear time complexity O(n) = Big O(n)


// Given a number check is it a prime number or not.

function isPrime(n){
    if(n<2){
        return false
    }

    for(let i=2;i<n;i++){
        if(n%i === 0){
            return false
        }

    }

    return true

}

console.log(isPrime(3)) // true
console.log(isPrime(4)) // false
console.log(isPrime(5)) // true


// Linear time complexity O(n) = Big O(n)

// now we can optimize the above function by reducing the number of iterations

// Integers larger than the square root do not need to be checked, because if n is divisible by a number larger than its square root, it is divisible by a smaller number that is less than its square root.

function isPrime(n){
    if(n<2){
        return false
    }

    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i === 0){
            return false
        }

    }

    return true

}

console.log(isPrime(3)) // true
console.log(isPrime(4)) // false
console.log(isPrime(5)) // true

//  the time complexity of the above function is O(sqrt(n)) = Big O(sqrt(n))

// Given a positive integer n, determine if the number is a power of 2 or not

function isPowerOfTwo(n){

    if(n<1){
        return false
    }

    while(n>1){
        if(n%2 !== 0){
            return false

        }
        n = n/2
    }
    return true

}


console.log(isPowerOfTwo(4)) // true
console.log(isPowerOfTwo(5)) // false
console.log(isPowerOfTwo(18)) // false

// logarithmic time complexity of the above function is O(log n) = Big O(log n)



// Now we can optimize the above function by using bitwise operators

function isPowerOfTwo(n){
    if(n<1){
        return false
    }

    return (n & (n-1)) === 0

}

console.log(isPowerOfTwo(4)) // true
console.log(isPowerOfTwo(5)) // false
// this function is O(1) = Big O(1) time complexity means it is constant time complexity







