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