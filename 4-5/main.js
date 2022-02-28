const array = [];
for (let i=2; process.argv[i] !==undefined; i++){
  if( 0<=process.argv[i] && process.argv[i]<=9999 ){
    let number = process.argv[i]
    array.push(Number(number))
  }else{
    console.log("入力値が正しくありません。");
  }
}
for (let i=0; i<array.length; i++){
  let min_num = array[i];
  for (let j=i+1; j<array.length; j++){
    if( min_num > array[j]){
      min_num = array[j];
      k = j;
    }
  }
  let result = array[i];
  array[i] = array[k];
  array[k] = result;
}
console.log(array); 