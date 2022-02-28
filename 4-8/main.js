const str = "こはるはるここはるここはるはるここはるこはるはるはる"
let str_array = [str];

count1 = 120;　//こはる
count2 = 201;　//はるこ

let array = [];
for(i=0; i<str.length; i++){
   if(str[i]==="は"){
       array.push(2);
   }else if(str[i]==="る"){
       array.push(0);
   }else if(str[i]==="こ"){
       array.push(1);
   }
};
const count_koharu = [];
const count_haruko = [];
for(j=0,k=1,n=2; j<array.length; j++,k++,n++){
    if(array[j]===1 && array[k]===2 && array[n]===0){
     count_koharu.push(1);   
    }else if(array[j]===2 && array[k]===0 && array[n]===1){
        count_haruko.push(2);
    }
}
console.log("こはる:"+count_koharu.length);
console.log("はるこ:"+count_haruko.length);
