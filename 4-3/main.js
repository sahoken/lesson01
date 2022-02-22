const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
];

const result = errorLogs.map((error)=>{
  return error.substring(error.indexOf(":")+1,error.indexOf(" -"));
});
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);