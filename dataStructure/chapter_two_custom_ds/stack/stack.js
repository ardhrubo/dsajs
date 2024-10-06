/*
Stack:

The stack data structure is a sequential colelction of elements that
follow the LIFO (Last In First Out) principle. The last element added
to the stack is the first one to be removed.


A stack of plates.
The last plate added to the stack is the first one to be removed.

Stack is an abstract data type. It is defined by its behavior rather than
being a mathematical model.

The stack data structure has two main operations:
1. push: Adds an element to the stack.
2. pop: Removes the most recently added element.


*/

class Stack {
    constructor(){
        this.items = []
        this.count = 0
    }
    push(element){
        this.items[this.count] = element
        this.count+=1
        return this.count - 1
    }

    // Return and remove the top element in the stack
    // Return undefined if the stack is empty

    pop(){
        if(this.count ==0) return undefined
        let deleteItem = this.items[this.count -1]
        this.count -=1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check the top element in the stack
    peek(){

        return this.items[this.count-1]
    }

    // Check if the stack is empty

    isEmpty(){
        return this.count == 0
    }

    // Check the size of the stack

    size(){
        return this.count
    }

    // Print the elements in the stack
    print(){
        let str = ''
        for(let i=0;i<this.count;i++){
            str+=this.items[i] + ' '
            
        }
        return str
    }

    // Clear the stack
    clear(){
        this.items = []
        this.count = 0
        return this.items
    }


}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)

// console.log(stack.peek())

stack.push(400)
console.log(stack)

stack.pop()
// console.log(stack.clear())

console.log(stack.isEmpty())

console.log(stack.print())

stack.pop()
stack.pop()
// console.log(stack.print())


// stack.pop()


// console.log(stack)
// console.log(stack.clear())


