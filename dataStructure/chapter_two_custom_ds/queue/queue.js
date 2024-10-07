/*

Queue :

The queue data structure is a sequential collection of elements that follows the principle of FIFO(First in First Out)

The first elemenmt inserted into the queue is the first element 
to be removed.

A queue of people. People enter the queue at one end(rear/tail) and leave the other end (front/head).


Queue is an abstract data type. It is defined by its behaviour rather than being a mathematical model.

The data structure supports two main operations
    1. Enqueue, which adds an element to the rear/tail of the collection.
    2. Dequeue, which removes an element from the front/had of the
    collection.

*/

class Queue {

    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;

    }

    enqueue(item){
        this.items[this.end] = item;
        this.end++;
    }
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty(){
        return this.front === this.end ;
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.end - this.front;
    }

    print(){
        return this.items;
    }



    



}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.items);

queue.dequeue();
queue.enqueue(4);

console.log(queue.print());

console.log(queue.items);
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.size());




