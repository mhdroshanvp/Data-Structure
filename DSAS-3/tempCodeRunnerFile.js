class Node{
    constructor(value){
        this.value = value
        this.right = null;
        this.left = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(n){
        let node = new Node(n)
        if (this.isEmpty) {
            this.root = node;
        }
        this.InsertNode(this.root,value);
    }
    InsertNode(root,value){
        if (root.value > node.value) {
            if (root.left === null) {
                root.left = node
            }else{
                this.InsertNode(root.left,node)
            }
        }
    }
    search(root,value){
        if (!root) {
            return null
        }else{
            if (root.value === value) {
                return true
            }else if (root.value<value) {
                return this.search(root.right,node)
            }else{
                return this.search(root.left,node)
            }
        }
    }
    prefix(root){
        if (root) {
           console.log(root.value);
           this.prefix(root.left) 
           this.prefix(root.right) 
        }
    }
    
}
let obj = new BinarySearchTree()
obj.InsertNode(10)
obj.InsertNode(5)
obj.InsertNode(15)
obj.InsertNode(20)
obj.InsertNode(30)
obj.InsertNode(40)

console.log(prefix(10));