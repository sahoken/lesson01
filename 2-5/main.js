const input = process.argv[2];
let hundred =Math.floor(input/100);
let under = input-hundred*100
let ten =Math.floor(under/10);
let one = input-hundred*100-ten*10;
console.log("100円玉"+hundred+"枚, 10円玉"+ten+"枚, 1円玉"+one+"枚");
