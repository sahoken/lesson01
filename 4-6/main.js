const data= process.argv[2];

const time = data.split(":");
const time_num=time.map((math)=>{
    return Number(math)
});
let hours = time_num[0];
let minutes = time_num[1]+45;

if(minutes>60){
    minutes=minutes-60;
    hours=hours+1;
};
if(hours>=24){
    hours=hours-24;
};
console.log(hours);
console.log(minutes);