function bubble(array){
  for (let i = 0; i < array.length-1; i++) {
      for (let j = 0; j < array.length-1-i; j++) {
          if (array[j]>array[j+1]) {
              temp=array[j];
              array[j]=array[j+1];
              array[j+1]=temp;
          }
      }
  }
  return array;
}
console.log(bubble([4,2,3,1,5]));
