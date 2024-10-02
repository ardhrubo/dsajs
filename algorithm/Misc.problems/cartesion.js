// Cartesian Product of two sets

/*
Problem: Given two finite non empty sets, find their Cartesian product.

In mathematics, specifically set theory, the Cartesian product of two sets
A and B is the set of all ordered pairs (a, b) 
where a is in A and b is in B.
Const A = [1,2,3]
Const B = [4,5,6]

A x B = [(1,4),(1,5),(1,6),(2,4),(2,5),(2,6),(3,4),(3,5),(3,6)]


Process:
1. Create an empty array to store the result
2. Loop through the first set
3. Loop through the second set
4. Push the ordered pair into the result array
5. Return the result array

*/

function cartesianProduct(setA,setB){
    let product = []
    for(let i=0;i<setA.length;i++){
        for(let j=0;j<setB.length;j++){
            product.push([setA[i],setB[j]])
        }

    }
    return product

}


console.log(cartesianProduct([1,2,3],[4,5,6])) // [[1,4],[1,5],[1,6],[2,4],[2,5],[2,6],[3,4],[3,5],[3,6]]
console.log(cartesianProduct([1,2],[3,4])) // [[1,3],[1,4],[2,3],[2,4]]
console.log(cartesianProduct([1],[2])) // [[1,2]]
console.log(cartesianProduct([1,2,3],[4,5])) // [[1,4],[1,5],[2,4],[2,5],[3,4],[3,5]]








