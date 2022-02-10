const a = process.argv[2];
let b =Math.floor(a/100);
let c = a-b*100
let d =Math.floor(c/10);
let e = a-b*100-d*10;
console.log("100円玉"+b+"枚, 10円玉"+d+"枚, 1円玉"+e+"枚");
