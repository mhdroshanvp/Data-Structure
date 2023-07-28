class node{
    constructor(value){
      this.value=value
      this.next=null
    }
  }
  class stack{
    constructor(){
      this.head=null
    }
    push(value){
      let newnode=new node(value)
      if(this.head==null){
        this.head=newnode
      }else{
        newnode.next=this.head
        this.head=newnode
      }
  
    }
    update(old,neww){
      let cont=this.head
      while(cont){
        if(cont.value==old){
          cont.value=neww
        }
        cont=cont.next
      }
    }
    display(){
      if(this.head==null){
        console.log("empty");
      }else{
        let cont=this.head
        while(cont){
          console.log(cont.value);
          cont=cont.next
        }
      }
    }
  }
  let link= new stack()
  link.push(10)
  link.push(20)
  link.push(30)
  link.display()
  console.log('------------');
  link.update(20,22)
  link.display()