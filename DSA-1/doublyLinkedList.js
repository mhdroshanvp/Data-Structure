class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
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
let a = new DoublyLinkedList();
a.add(10);
a.add(20);
a.add(30);
a.add(40);
a.add(50);
a.add(60);
a.display()