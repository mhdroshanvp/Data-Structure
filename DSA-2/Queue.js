// class Queue{
//     constructor(){
//         this.items = [];
//     }
//     enqueue(n){
//         this.items.push(n);
//     }
//     dequeue(){
//         this.items.shift();
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     size(){
//         return this.items.length
//     }
//     clear(){
//         return this.items = [];
//     }
//     peek(){
//         return this.items[0];
//     }
//     display(){
//         for (let i = 0; i < this.items.length; i++) {
//             console.log(this.items[i]);
//         }
// }
// let obj = new Queue();
// obj.inqueue(12)
// obj.inqueue(13)
// obj.inqueue(14)
// obj.inqueue(15)
// obj.display();
// console.log('==================');
// obj.dequeue();
// obj.display();
/////////////////////////////////////////////////////////////////////////////////////////////
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    remove(){
        if(this.isEmpty()){
            return null
        }else{
            let temp=this.head
            this.head=this.head.next
            if(this.head===null)
            {
                this.tail=null
            }
            this.size--;
            return temp.value
        }
    }


    print(){
        let current = this.head
        let output = ''
        while(current){
            output += current.value + ' '
            current = current.next
        }
        console.log(output)
    }
}
const ll = new LinkedList();
ll.insert(2);
ll.insert(4);
ll.insert(6);
ll.insert(8);
ll.print()