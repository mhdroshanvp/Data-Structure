// function a(n){
//     if(n<=1){
//         return
//     }
//     a(n-1);
//     console.log(n);
//     a(n-1);
// }
// a(3)    //2,3,2

function rec(n){
    if(n<2){
        return n;
    }                                 //fibnoccy
    return rec(n-1)+rec(n-2);
}
console.log(rec(0));
console.log(rec(1));
console.log(rec(6));