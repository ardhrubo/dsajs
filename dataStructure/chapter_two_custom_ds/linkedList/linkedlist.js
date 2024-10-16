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
        }


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




