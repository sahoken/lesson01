const a = process.argv[2];
const b = process.argv[3];
const loop = "*-".repeat(b);
for(let i=1; i<=a; i++){
    const array = [];
    for(let j=0; j<b; j++){ 
        if(i%2===1){
            array.push(loop.charAt(j));
        }else{
            array.push(loop.charAt(j+1));
    }       
    }
const result= array.join("");
 console.log(result);
}