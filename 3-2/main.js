const a = process.argv[2];
const b = process.argv[3];
for(let i=1; i<=a; i++){
    const array=[];
    for(let j=1; j<=b; j++){
        array.push(j+i-1);
    }
    const newarray = [];
    for(q=0; q<array.length; q++){
    if(array[q]%2===1){
        newarray.push("\*");
    }else{
        newarray.push("-");
    }
 }
const result= newarray.join("");
 console.log(result);
}