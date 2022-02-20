const a = process.argv[2].toString();
const b = process.argv[3].toString();
const array =(input)=>{
    return Array.from(input).reverse();   
}
console.log(Number(array(a).join(""))+Number(array(b).join("")));
