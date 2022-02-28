const json = require("./users.json");
const array = [];

json.users.forEach((user)=>{
  const numbers =  ((rank, year, num1, num2)=>{
    if(user.rank === rank && year){
      array.push(user.name + ":" + Number(num1 * Number(user.years) + num2));
    }
  });
  numbers("A",user.years < 5, 3000, 100000);
  numbers("A",user.years >= 5, 3000, 120000);
  numbers("B", user.years, 4000, 140000);
  numbers("C", user.years, 5000, 160000);
});
array.sort((a,b)=>{
   return b.match(/\d+/) - a.match(/\d+/);
}); 
console.log(array.join("\n")); 