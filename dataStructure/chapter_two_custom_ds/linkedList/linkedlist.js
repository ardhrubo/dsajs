class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
    
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node
        }

        this.size++

    }

    // O(1) time complexity in prepend


    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        } else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    // O(n) time complexity in append
    removeFrom(index){
        if(index<0 || index > this.size){
            return null
        }

        let removedNode;
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next

        }

        this.size--

        return removedNode.value


    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        
        }

        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }

    }

    // Remoing head node is O(1) time complexity - Constant time complexity
    // Removing other node is O(n) time complexity - Linear time complexity



    insert(value,index){
        if( index < 0 || index > this.size){
            return 
        }
        if(index === 0){
            this.prepend(value)
            return
        }else{
            const node = new Node(value);
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }


    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        
        let i=0;
        let curr = this.head
        while(curr){
            if(curr.value===value){
                return i
            }
            curr = curr.next
            i++
        }

        return -1



    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head=prev

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



}

const list = new LinkedList();

list.prepend(10)
list.prepend(20)
list.prepend(30)

console.log(list.isEmpty()) // true

console.log(list.getSize()) // 0

console.log(list.print()) // 

list.append(40)
list.append(50)
list.append(60)

console.log(list.print()) // 

list.insert(70,2)

console.log(list.print()) //

list.insert(80,0)

console.log(list.print()) //
console.log(list.getSize()) 


console.log(list.removeFrom(2))

console.log(list.removeFrom(10))

console.log(list.print()) // 80 -> 30 -> 20 -> 10 -> 40 -> 50 -> 60 ->

console.log(list.getSize()) 


console.log(list.removeValue(40))

console.log(list.removeValue(30))

console.log(list.print()) // 80 -> 20 -> 10 -> 50 -> 60 ->

// console.log(list.search(80)) // 0

list.reverse()

console.log(list.print())

