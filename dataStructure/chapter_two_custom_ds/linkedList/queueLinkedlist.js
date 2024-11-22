const LinkedListWithTail = require('./linkedlisttail')
const linkedlisttail = require('./linkedlisttail')

class LinkedListQueue {
    constructor(){
        this.list = new LinkedListWithTail()
    }

    enqueue(value){

        this.list.append(value)

    }

    dequeue(){
        return this.list.removeFromEnd()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }

}


const list = new LinkedListQueue()

console.log(list.isEmpty())

list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.enqueue(5)

console.log(list.print())

list.dequeue()

console.log(list.print());





