const a = process.argv[2];
for(let i=1; i<=a ;i++){
const array = [];
    for(let j=1; j<=a-i; j++){
        array.push(" ");
    }
for(let j=1; j<=2*i-1; j++){
    array.push("*");
    }
    const result = array.join("");
    console.log(result);
}