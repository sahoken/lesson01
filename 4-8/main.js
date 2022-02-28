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
let count_koharu=0;
let count_haruko=0;
for(j=0,k=1,n=2; j<array.length; j++,k++,n++){
    if(array[j]===1 && array[k]===2 && array[n]===0){
     count_koharu++   
    }else if(array[j]===2 && array[k]===0 && array[n]===1){
     count_haruko++
    }
}
console.log("こはる:"+count_koharu);
console.log("はるこ:"+count_haruko);
