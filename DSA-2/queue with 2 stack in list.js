class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue() {
        if (!this.first) return null
        if (this.first == this.last) {
            this.last = null
        }
        let curr = this.first
        this.first = this.first.next
        this.size--
        return curr
    }
}


class Stack {
    constructor() {
        this.q1 = new Queue()
        this.q2 = new Queue()
        this.size = 0
    }
    push(val) {
        this.q1.enqueue(val)
        this.size++
    }
    pop() {
        if (this.size === 0) return undefined
        while (this.q1.size > 1) {
            this.q2.enqueue(this.q1.dequeue())
        }
        const popped = this.q1.dequeue()
        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
        this.size--
        return popped
    }
}

let st = new Stack()
st.push('er')
st.push('re')
st.push('ury')
st.pop()
console.log(st);
