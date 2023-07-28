class HashTable {
    constructor(size) {
        this.size = size
        this.table = []
    }
    hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.size
    }
    insert(key, value) {
        const index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }
        this.table[index].push([ key, value ])
    }
    get(key) {
        if(!key){
            return null
        }
        const index = this.hash(key)
        if (this.table[index]) {
            for (const item of this.table[index]) {
                if (item && item[0] == key) {
                    return item[1]
                }
            }
        }
    }
    remove(key) {
        const index = this.hash(key)
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i].key === key) {
                    this.table[index].splice(i, 1)
                    if (this.table[index].length == 0) {
                        this.table[index] = undefined
                    }
                    return true
                }
            }
        }
        return false
    }
    getKeys() {
        for (const bucket of this.table) {
            if (bucket) {
                for (const item of bucket) {
                    console.log(item[0])
                }
            }
        }
    }
    getValues() {
        for (const bucket of this.table) {
            if (bucket) {
                for (const item of bucket) {
                    console.log(item[1])
                }
            }
        }
    }

    getAll(){
        for(let bucket of this.table){
            if(bucket){
                for(let item of bucket){
                    console.log(item)
                }
            }
        }
    }
    getSize(){
        let size = 0
        for(const bucket of this.table){
            if(bucket){
                size += bucket.length
            }
        }
        return size
    }
}
const table = new HashTable(10)
table.insert('name', 'roshh')
table.insert('age', 19)
table.insert('domain', 'mern')
table.insert('education', 'higher secondary school')
console.log(table.get('name'))
console.log('==================')
table.getKeys()
console.log('==================')
table.getValues()
console.log('==================')
table.getAll()