

console.log("Hai function Member");

function sayMyName(){
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
console.log("Hai function Member");
}

// sayMyName();
function addTwoNumber(a,b){
//  console.log(`Sum of two number is:${a+b}`);
return a+b;
}
const first = 5;
const second = 6;
// console.log(addTwoNumber(first,second));

function loginUserMessage(username){
    if(!username){
        return `Please enter a user valid name`
    }
  return `${username} just logged in`
   
}

//console.log(loginUserMessage())//this take a output ->>>>Please enter a user valid name


function calculateCartPrice(...num1){//  In this function this ...num1 operator name is (Rest operator)
    //In this function this operator is receve the all value of give the calling function
  //console.log(num1)
//   return num1
}

// console.log(calculateCartPrice(2,4,4));

// function calculateCartPrice(val1,val2,...num1){//  In this function   the rest boperator receve the  value is not include the first two value...
//   console.log(num1)
// //   return num1
// }

// console.log(calculateCartPrice(2,4,9,5,67,8,5));


//++++++++++++++++++Pass the object to the function +++++++++++++++++++++++////
    const user={
        name:"Shivam",
        rollNumber:323
    }

    function handleObject(anyObject){
        //console.log(`Username is ${anyObject.userName.fullName.firstName} and rollNumber is ${anyObject.rollNumber}`);
        
    }

    handleObject({
        userName:{
            fullName:{
                firstName:"Shivam",
                lastName:"Gaur",
            },
        },
        rollNumber:336,
    })


    //+++++++++++++++++++++++++++ Pass the Array to the function +++++++++++++++++++++++++++++//
          
    const arrayArg = ["Shivam","Gaur","Krishan","Piyush"];



    function handleArray(arrarg){
        const result=arrarg.toString().toLowerCase();
        console.log(`Array argument is ${result}`)
    }

    handleArray(arrayArg)








