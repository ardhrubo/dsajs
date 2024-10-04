/*
Set: A set is a data structure that holds a collection of unique values.

The values must be unique.

Set can contain a mix of different data type.

Sets are dynamically sized. you don't have to declare
the size of a set before creating it.

Set do not maintain insertion order.

Sets are iterable. They can be used with a for of loop.


Sets vs Arrays:

Sets are similar to arrays but with some differences.

Arrays can conatain duplicate values, but sets can't.

Insertion order is maintained in arrays but not in sets.

Seraching and deleting an element in a set is faster than an array.



*/


const set = new Set([1,3,5])
set.add(2);
set.add(5);
// console.log(set.has(2))
set.delete(3);
// console.log(set.size);
set.clear()

for(const item of set){
    console.log(item);
}







