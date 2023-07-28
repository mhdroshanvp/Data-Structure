// // array
// class Stack{
//     constructor(){
//         this.items = [];
//     }
//     push(n){
//         this.items.push(n);
//     }
//     pop(){
//        if (this.items.length===0) {
//         return null
//        } 
//         return this.items.pop();
//     }
//     peek(){
//         console.log( this.items[this.items.length-1]);
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     size(){
//         return this.items.length;
//     }
//     print(){
//         for(let i = this.items.length-1 ; i>=0 ; i--){
//             console.log(this.items[i]);
//         }
//     }
// }
// let obj = new Stack();
// obj.push(12);
// obj.push(20);
// obj.push(32);
// obj.peek()
// obj.print()

//linkedlist:-

class Node{
    constructor(x){
        this.value = x;
        this.next = null;
    }
}
class StackLinked{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size===0;
    }
    push(x){
        let node = new Node(x);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    peek(){
        if (this.isEmpty()) {
            return null;
        }else{
            return this.head.value;
        }
    }
    pop(){
        if (this.isEmpty()) {
            return null;
        }
        else{
            let curr = this.head;
            this.head = this.head.next
            this.size--;
        }
    }
    
    display(){
        if (this.isEmpty()) {
            console.log('empty stack');
        }else{
            let cont = this.head;
                while (cont) {
                console.log(cont.value);
                cont = cont.next;
            }
            
        }
    }
}
let obj2 = new StackLinked();
// console.log(obj2.isEmpty());
obj2.push(20);
obj2.push(30);
obj2.push(50);
obj2.display();

// console.log("Peek of the stack :" + obj2.peek());