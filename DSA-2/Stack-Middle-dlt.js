function middle(stck){
    let temp = [];
    let mid = Math.floor(stck.length/2);
    for (let i = 0; i < mid; i++) {
        temp.push(stck.pop());
    }
    stck.pop();
    while (temp.length>0) {
        stck.push(temp.pop());
    }
    return stck;
}
let stck = [1,2,3,4,5]
console.log(stck);
console.log(middle(stck));