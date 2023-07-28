class Node{
    constructor(value){
        this.value=value;
        this.next = null;
    }
}
class arrayToLinkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    empty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }
   createArray(array){ 
    for(let i = 0; i<array.length; i++){
        let node = new Node(array[i]);

        if(this.empty()){
            this.head=node;
        }
        else {
            let pointer = this.head;
            while(pointer.next){
                pointer = pointer.next;
            }
            pointer.next = node; 
        }
        this.size++;
    }
   }
    display(){
        if(this.empty()){
            console.log("Empty");
            return;
        }
        let node = this.head;
        let values ="";

        while(node!==null){
            values +=node.value+' ';
            node=node.next;
        }
        console.log(values)
    }
}
let array=[12,3,4,6]
let list = new arrayToLinkedlist();
list.createArray(array)
list.display()