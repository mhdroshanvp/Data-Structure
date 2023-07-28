let linear = ((arr,tar)=>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===tar) {
            return true;
        }
    }
    return false;
})
let arr = [1,2,3,4,5,5,6,7];
let tar = 6;
let res = linear(arr,tar);
console.log(res);