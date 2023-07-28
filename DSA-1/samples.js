function binary(tar,arr) {
    let left = 0;
    let right= arr.lenghth-1;
    while (left<=right) {
        let mid = Math.floor((left+right)/2);
        if(arr[mid]===tar){
            return mid;
        }
        if (arr[mid]<tar) {
            right = mid-1
        }else if(arr[mid]>tar){
            left = mid+1
        }
        
    }
    return -1;
}
let tar = 4;
let arr = [1,2,3,4,5];
binary(tar,arr);