class Stack {
    constructor() {
        this.q1 = []
        this.q2 = []
    }
    push(val) {
        this.q1.push(val)
    }
    pop() {
        if (this.isEmpty()){
            return null
        }
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift())
        }
        
        let removed = this.q1.shift()

        while (this.q2.length) {
            this.q1.push(this.q2.shift())
        }
        return removed
    }
    top() {
        return this.q1[this.q1.length - 1]
    }
    isEmpty() {
        return (this.q1.length === 0 && this.q2.length === 0)
    }

}
let s=new Stack()
s.push('aa')
s.push('bb')
s.push('cc')
s.push('dd')
console.log(s.pop());