class Node{
    constructor(n){
        this.value = n;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size;
    }
    push(n){
        let node = new Node(n);
        if (this.isEmpty()) {
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    pop(){
        if (this.isEmpty()) {
            return null
        }else{
            let con = this.head;
            this.head = this.head.next;
        }
        this.size--
    }
    peek(){
        console.log(this.head.value);
    }
    display(){
        if (this.isEmpty()) {
            console.log('empty');
        }else{
            let cur = this.head;
            while (cur) {
                console.log(cur.value);
                cur = cur.next
            }
        }
    }
}
let obj = new Stack();
obj.push(10)
obj.push(20)
obj.push(30)
obj.display();
console.log('========');

obj.pop();
obj.display()