// Linked list with tail pointer.

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
    
}


class LinkedListWithTail{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    print(){
        if(this.isEmpty()){
            return "empty"
        }else{
            let current = this.head;
            let listValue = ''
            while(current){
                listValue += current.value + ' -> ';
                current = current.next
            }

            return listValue

        }
    } 

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++

    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++

    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }

        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }

        const value = this.tail.value
        if(this.size===1){
            this.head = null
            this.tail = null

        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next

            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
     

    }



}


const list = new LinkedListWithTail()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)


console.log(list.print())

list.removeFromFront()



console.log(list.print())


list.removeFromEnd()

console.log(list.print())


list.prepend(11)

console.log(list.print())

console.log(list.getSize())

