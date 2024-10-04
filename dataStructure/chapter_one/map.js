/*
Map:
A map is an ordered collection of key-value pairs. Both 
keys and values can be of any type.

To retrieve a value from a map, you must know the key.

Maps are iterable. They can be used with a for of loop.

Object vs Map:

Objects are unordered whereas maps are ordered.

Keys in an object can be strings or symbol, whereas keys in a map can be of any type.

An object has a prototype, so there are default keys in the map that
could collide with your keys if you're not careful.
A map on the other hand does not have a prototype, so there are no 
default keys.


Object are not iterable,wheareas maps are iterable.

The numeber of item in an object must be determined manually, whereas
it is readily available with the size property in a map.

Apart from storing data, you can attach funtionalilty to an 
object, whereas maps are used to store data only.


*/



const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

map.set('d', 4);
console.log(map.get('a'));
console.log(map.size);
// map.delete('b');
console.log(map.has('b'));
// map.clear();
for(const [key, value] of map){
    console.log(key, value);    
}




