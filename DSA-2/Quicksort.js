function quick(array){
    if(array.length<2){
        return array;
    }
    let piv= array[array.length-1];
    let A = [];
    let a = [];
    for (let i = 0; i < array.length-1; i++) {
        if (piv<array[i]) {
            A.push(array[i]);
        }else{
            a.push(array[i]);
        }
    } 
    return [...quick(a),piv,...quick(A)];
}
console.log(quick([5,2,1,4,3]));