//Problem - 1----------
function calculateVAT(price) {
   if(typeof price !== "number" || price <= 0)
      return "Invalid";
   const vat = price * (7.5 / 100);

   return vat;
}
const price = 100;
console.log(calculateVAT(price))

// Problem - 2--------
 function validContact(contact){
   if(typeof contact !== "string"){
      return "Invalid"
     }
  if(contact.includes(" ")){
   return false;
  }
  else if (contact.length !== 11){
   return false;
  }
  else if(!contact.startsWith("01")){
   return false;
  }
  else{
   return true;
 }
}
const contactT = validContact('01873333199')
console.log(contactT)


// Problem - 3------------
function willSuccess(marks){
      let passMark = 0;
      let failMark = 0 ;
   if(!Array.isArray(marks)){
      return "Invalid";
   }

   for (let mark of marks){
      if(mark >= 50){
         passMark++

      }
      else if(marks.length === 0){
         return "Invalid"
      }

      else{
         failMark++
      }
   }
   return passMark > failMark;
}
const marks = [50, 30, 70, 80, 40, 90]
console.log(willSuccess(marks))

// Problem - 4----------

patrolist = { name: "Rahul", gender: "male", age: 28 },
patrilist = { name: "Joya", gender: "female", age: 21 }

function validProposal(patrilist , patrilist){
   if(typeof patrolist !== "object" || typeof patrilist !== "object"){
      return  "Invalid"
   }
  if(patrolist.gender !== patrilist.gender && Math.abs(patrolist.age - patrilist.age) <= 7 ){
   return true;
  }
  else {
   return false
  }
}

console.log(validProposal(patrilist , patrilist))

// Problem - 5---------

const times = [1000, 499, 519, 300];

function calculateSleepTime(times) {
  let sumOfTimes = 0;
  for (i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
    sumOfTimes += times[i];
  }
  const time = {
    hour: Math.floor(sumOfTimes / (60 * 60)),
    minute: Math.floor((sumOfTimes % 3600) / 60),
    second: sumOfTimes % 60,
  };
  return time;
}

console.log(calculateSleepTime(times));
