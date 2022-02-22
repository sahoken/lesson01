const compare =((a,b)=>{
    return b - a;
});
const input = [process.argv[2],process.argv[3],process.argv[4],process.argv[5],process.argv[6]];
const num_input = input.map((number)=>{
    return Number(number);
});
num_input.sort(compare);
console.log(num_input[2]);