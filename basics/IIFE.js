
//Immediatly Invoked Function

//Grobal Scope ka variable ka polution ko rokna kaliya IIFE ka use hota hai
//This is a IIFE function when i declare the counter variable in function using var then the scope is only the chai function that is not use the other function  this is a  IIFE function.....


(function chai(){ //Named IIFE
    var counter=1;
    console.log('DB-Connection');
    console.log(counter++);
})();
// console.log(counter);//This is not execute  this is always take the error 

//When i call the two and nore IIFE function then the first function is  close the semicolon ;

((name)=>{
    console.log(`DB_CONNECTION TWO ${name}`);
    
})("hitesh")