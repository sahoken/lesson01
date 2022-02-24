let numbers = [1,2,3,4,5,6,7,8,9,0];
let a = numbers.length;
while (a) {
    let j = Math.floor( Math.random() * a );
    let t = numbers[--a];
    numbers[a] = numbers[j];
    numbers[j] = t;
};
const result = [];
numbers.forEach((number)=>{
    return result.push(number);
});
console.log(result.join(" "));
