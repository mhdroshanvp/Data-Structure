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
    prepend(n){
        let obj = new Node(n);
        if(this.head===null){
            this.head = obj;
        }else{
            obj.next = this.head;
            this.head = obj;
        }
    }
    append(n){
        let obj1 = new Node(n);
        if (this.head===null) {
            this.head = obj1;
        }else{
            let cont = this.head;
            while (cont.next) {
                cont = cont.next;
            }
            cont.next = obj1;
        }
    }
    insertAft(after,value){
        let obj2 = new Node(n);
        let cont = this.head;
        while (cont.next) {
            if (cont.value===value) {
                obj2.next = cont.next;
                cont.next = obj2;
            }
            cont = cont.next;
        } 
    }
    display(){
        if (this.head===null) {
            console.log('its empty');
        }else{
            let conti = this.head;
            while (conti) {
                console.log(conti);
                conti = conti.next;
            }
        }
    }
}