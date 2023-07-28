let arr = [1,2,3,4,5,6,7];
function a(target,arr) {
    let leftin = 0;
    let rightin = arr.length-1;
    while (leftin<=rightin) {
        let mid = Math.floor((leftin+rightin)/2);
        if (arr[mid]===target) {
            return mid;
        }
        if(target<arr[mid]){
            rightin = mid-1;
            
        }
        else if(target>arr[mid]){
            leftin = mid+1;
        }
        
    }
    return -1;
    
}
let res = a(5,arr);
console.log(res);
//o(logn);