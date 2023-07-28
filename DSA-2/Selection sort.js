function insertion(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[min]){
                min = j;
            }
        }
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
    }
    return arr;
}
let arr = [4,2,4,6,8,9];
console.log(insertion(arr));