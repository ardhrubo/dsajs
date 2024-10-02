/*
Object : Object is a non-primitive data type in JavaScript.
It is a collection of key-value pairs.

To retrive a value from an object, you can use either 
the corresponding key or the dot notation/bracket notation.

Object is not iterable. You can't use a for of loop to iterate over an object.

Time Complexity:
Access: O(1)
Search: O(n)
Insertion: O(1)
Deletion: O(1)
Get all keys: O(n)
Get all values: O(n)
Object.entries: O(n)


*/

const obj = {
    name: 'Mr Roki',
    age: 25,
    'next key': 'This is a nothing key',
    "key": true
}

console.log(obj.name); // Mr Roki
console.log(obj['age']); // 25
console.log(obj['next key']); // This is a nothing key
console.log(obj.key); // true





