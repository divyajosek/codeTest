/********************************************************

 Find the sum of all the multiples of 3 or 5 below 1000.

********************************************************/
//Initialising sum
let sum =0;
let limit=1000;

//Loop till the limit
for(let i=0;i<limit;i++){
  
 //Check for multiples of 3 & 5
  if((i%3 == 0) || (i%5 ==0 )){
       sum +=i;
    
  }
 
}
console.log("Sum :"+sum);
