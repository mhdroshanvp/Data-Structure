function p(n){
    for (let i=n; i>1; i=i/2){
     if(i%2==1){
        return false;
    }
    }
        return true;
}
console.log(p(5))