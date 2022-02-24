let input = process.argv[2];
input = input.toLowerCase();
const names = input.split(',');
const answer_name = names.filter((name)=>{
    return name.includes(process.argv[3].toLowerCase()); 
});
const result = answer_name.sort(); 
console.log(result.join(" "));
