function insertion(array) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    for (let i = 0; i <array.length; i++) {
            let temp = array[i];    
            j=i-1;
            while (j>=0 && array[j]>temp) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = temp;
    }
    return array;
}
let array = [5, 3, 1, 4, 2]; 
console.log(insertion(array));