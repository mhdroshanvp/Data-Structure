class Stack{
  constructor(){
      this.items = [];
  }
  push(value){
      this.items.push(value);
  }
  pop(){
      return this.items.pop();
  }
}

let stack = new Stack();

let str = 'apple'
for(let i=0;i<str.length;i++){
  stack.push(str[i]);
}
let reverseStr = '';
for(i=0;i<str.length;i++){
  reverseStr +=  stack.pop();
}
console.log(reverseStr);