const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60];
let one = 0
let ten = 0
let twenty = 0
let thirty = 0
let forty = 0
let fifty = 0
let sixty = 0
let seventy = 0
let eighty = 0
let ninety = 0
let hundred = 0
for(let i=0; i<=students.length-1; i++){
    if(students[i]<10){
        one += 1;
    }else if(students[i]<20){
        ten += 1;
    }else if(students[i]<30){
        twenty += 1;
    }else if(students[i]<40){
        thirty += 1;
    }else if(students[i]<50){
        forty += 1;
    }else if(students[i]<60){
        fifty += 1;
    }else if(students[i]<70){
        sixty += 1;
    }else if(students[i]<80){
        seventy += 1;
    }else if(students[i]<90){
        eighty += 1;
    }else if(students[i]<100){
        ninety += 1;
    }else if(students[i]=100){
        hundred += 1;
    }  
}
let scores = [one,ten,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety,hundred];
const array = [];
scores.filter((number)=>{
    if(number>=3){
        array.push("*");
    }else{
        array.push(" ");
        }
    }); 
const array2 = [];
scores.filter((number)=>{
    if(number>=2){
        array2.push("*");
    }else{
        array2.push(" ");
        }
    }); 
const array3 = [];
scores.filter((number)=>{
    if(number>=1){
        array3.push("*");
    }else{
        array3.push(" ");
        }
    }); 
const result= array.join("  ");
const result2= array2.join("  "); 
const result3= array3.join("  ");  
console.log(result); 
console.log(result2);
console.log(result3);
console.log("----------------------------------");
console.log("0 10 20 30 40 50 60 70 80 90 100");