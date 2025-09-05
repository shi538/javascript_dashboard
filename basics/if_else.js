
// //false values
// // false,0,-0,BigInt 0n,"",null,undefined,NaN

// if(0){
//     console.log("0")
// };
// if(-0){
//     console.log("-0")
// };
// if(false){
//     console.log("false")
// };
// if(BigInt){
//     console.log("bi")
// };
// if(0n){
//     console.log("0n")
// };
// if(""){
//     console.log("empty")
// };
// if(null){
//     console.log("null")
// };
// if(undefined){
//     console.log("un")
// };
// if(NaN){
//     console.log("Nan")
// };

//truthy values

//"0",'false'," ",[],{},function(){}


const emptyObject = {};
// if(Object.keys(emptyObject).length===0){
//     console.log("Object is empty");
// }
// if(""){
//     console.log("Object is empty");
// }
// if([]){
//     console.log("Object is empty");
// }
if(function(){}){
    // console.log("Object is empty");
}


//Nullish Coalescing Operator  (??): null undefined

//This Function use when the i am calling the two function and use the two varaible that is declare the another file .When i know the the vallue then the first variable is take the null and undefined values then the  second value is execute.


let val1;
// val1=5??10;
// console.log(val1);//this take the value of 5

val1=null??10;
// console.log(val1);//this take the value of 10 


val1=undefined??10;
console.log(val1);//this take the value of 10 

