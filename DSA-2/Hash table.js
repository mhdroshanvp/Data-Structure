class HashTable{
    constructor(n){
        this.n = n
        this.table = new Array (n)        
    }
    hash(key){
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.n
    }
    set(key ,value){
        let index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        let index  = this.hash(key)
        return this.table[index]
    }
    remove(key){
        let index = this.hash(key);
        this.table[index]= undefined
    }
    display(){
        for (let i = 0; i < this.table.length; i++){
            if (this.table[i]) {
                console.log(i,this.table[i]);
            }
        }
    }
}
let table = new HashTable(50);
table.set("name","bruce");
table.set("age",23);
table.display()

console.log(table.get("name"));
table.set("mane","clark");
table.display()