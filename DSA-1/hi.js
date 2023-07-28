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
    append(data){
        let m = new Node(data);
        if(this.head===null){
            this.head=m;
            this.size++;
        }
            let conti = this.head;
            while(conti.next){
                conti = conti.next;
            }
            conti.next = m;

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
a.reppend(65);
a.reppend(43);
a.reppend(35)
a.display();