/********************************************************

 Find the sum of all the multiples of 3 or 5 below 1000.

********************************************************/

let arr=[]; // Array created
const limit =1000; //limit of numbers


//multiples of 3 & 5 are pushed to array arr  
for(let i=0;i<limit ;i++){
  if((i% 3 === 0) || (i % 5 === 0))
    arr.push(i);
}

//Sum of the multiples 
const sum=arr.reduce((sum, val) => { return sum + val});

console.log("Sum of multiples of 3 & 5 : "+sum);
