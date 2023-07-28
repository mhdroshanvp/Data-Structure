function power(n) {
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false;
        }
        n=n/2
    }
    return true;
}
console.log(power(2));
// Big-o = o(logn)