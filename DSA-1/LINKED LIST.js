class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null; 
    }
    prepend(data){
        let n = new Node(data);
        if(this.head===null){
            this.head=n;
            this.size++;
        }else{
            n.next = this.head;
            this.head = n;
            this.size++;
        }

    }
    append(data) {
        let m = new Node(data);
        if (this.head === null) {
            this.head = m;
            this.size++;
        } else {
            let conti = this.head;
            while (conti.next) {
                conti = conti.next;
            }
            conti.next = m;
            this.size++;
        }
    }
    
    insertAfter(x,value){
        let node =new Node(value);
        let pointer = this.head;

        while(pointer.next){
            if(pointer.value===x){

                node.next = pointer.next ;
                pointer.next=node;
              }
            pointer = pointer.next;
        }
        console.log("no")
        return 
        
    }
    insertBefore(pos,value){
        let node = new Node(value);
        if(this.head===null){
            console.log('empty')
            return
        }
        
        let p1 = this.head;
        let p2 = null;
    
        while(p1.value !== pos){
            p2 = p1
            p1 = p1.next
        }
        node.next = p2.next
        p2.next = node
        this.size++
    }

    delete(value){
        if(this.head===null){
            console.log("sorry");
        }
        if (this.head.value===value) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let curr = this.head;
        let prev = null; 
        while (curr) {
            if (curr.value===value) {
                prev.next = curr.next;
                return;
            }
            prev = curr;
            curr = curr.next
        }
        console.log('no data');
    }
    deleteMiddle(){
        if(this.size===0){
            console.log("NO DATA");
            return
        }
        let mid = Math.floor(this.size/2);
        let curr = this.head;
        let prev = null;
        let count = 0;
        while (count<mid) {
             curr = curr.next;
             prev = curr;
             count++;
        }
        prev.next=current.next;
        this.size--;   
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
    reverse(){
        if(this.size === 0){
            return;
        }
    
        let curr = this.head;
        let prev = null;
    
        while(curr){
            let val=curr.next;
            curr.next =prev;
            prev = curr;
            curr = val;
        }
        this.head= prev;
    }
    removeDuplicates() {
        let current = this.head;
        while (current !== null) {
          let runner = current;
          while (runner.next) {
            if (runner.next.value === current.value) {
              runner.next = runner.next.next;
            } else {
              runner = runner.next;
            }
          }
          current = current.next;
        }
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
        if(this.head==null){
            console.log('is empyt');
            return
        }else{
            let cont = this.head;
            while (cont) {
                console.log(cont.value);
                cont = cont.next;
            }
        }
    }
}
const a = new LinkedList();
a.append(55);
a.append(34);
a.append(76);
a.append(65);
// a.insertBefore(65,11);
a.append(35)
a.reverse()
// a.removeDuplicates()
a.display();