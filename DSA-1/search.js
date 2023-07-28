class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedList{

    constructor(){
        this.head=null;
        this.size=0;
    }

    empty(){
        return this.size === 0;
    }

    getsize(){
        return this.size;
    }

    prepend(value){

        let node = new Node(value);

        if(this.empty()){
            this.head= node;
        }
        else {
            node.next = this.head;
            this.head = node;

        }
        this.size++
    }
    search(target){

        if(this.size===0){
            console.log('Empty')
            return;
        }
    
        let current = this.head;
        while(current){
            if(current.value === target){
                return true;
            }
            current=current.next;
        }
        return false;
    }  
}
let list = new linkedList();
list.prepend(10)
list.prepend(7)
list.prepend(6)
console.log(list.search(7));
console.log(list.search(8));