/*
Circular Queue Implementation

enqueue(element) - Adds an element to the end of the queue

dequeue() - Removes an element from the front of the queue

isEmpty() - Returns true if the queue is empty

isFull() - Returns true if the queue is full

peek() - Returns the element at the front of the queue

size() - Returns the number of elements in the queue

print() - Prints the elements in the queue

*/


class CircularQueue{

    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1
        this.front = -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength ===0
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear+1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength+=1
            if(this.front === -1){
                this.front = this.rear
            }
            
        }
    }
    dequeue(){
        if(!this.isEmpty()){
            let element = this.items[this.front];
            this.items[this.front] = null;
            this.currentLength-=1
            this.front = (this.front+1) % this.capacity;
            return element
        }else{
            this.front = -1;
            this.rear = -1;
            return null
        }
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            return null
        }else{
            let str = ''
            let i;
            for(i=this.front;i !==this.rear; i=(i+1)%this.capacity){
                str += this.items[i] + ' '
            }
            str += this.items[i]
            return str
        }
    }



}



let cq = new CircularQueue(5);

cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
cq.enqueue(6);



console.log(cq.isEmpty());
console.log(cq.isFull());
console.log(cq.print());
cq.dequeue();
cq.dequeue();
cq.dequeue();
console.log(cq.print());
console.log(cq.peek());
console.log(cq.peek());
cq.enqueue(7);
cq.enqueue(8);
console.log(cq.print());


