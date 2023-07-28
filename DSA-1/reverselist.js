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
    display(){
        if(this.size===0){
            return console.log('empty');
        }
        let curr= this.head;
        let values ='';
        while(curr){
            values += curr.value+" "
            curr=curr.next

        }
        return console.log("values",values);
    }
    
    reverse(){
        if(this.size === 0){
            return;
        }
    
        let curr = this.head;
        let prev = null;
    
        while(curr){
            let next=curr.next;
            curr.next =prev;
            prev = curr;
            curr = next;
        }
        this.head= prev;
    } 
}
let list = new linkedList();
list.prepend(10)
list.prepend(7)
list.prepend(6)
list.display()
list.reverse()
list.display();