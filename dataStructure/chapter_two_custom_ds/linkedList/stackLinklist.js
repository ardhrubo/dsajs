const LinkedListWithTail = require('./linkedlisttail')

class LinkedListStack {
    constructor(){
        this.list = new LinkedListWithTail()
    }

    push(value){
        this.list.prepend(value)

    }

    pop(){
        return this.list.removeFromFront()

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



// const stack = new LinkedListStack()

// console.log(stack.isEmpty())


// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)

// console.log(stack.print())
// console.log(stack.getSize());
// console.log(stack.pop());
// console.log(stack.peek())

// console.log(stack.print())




