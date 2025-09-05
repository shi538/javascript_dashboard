
//Primitive

// Types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);//Take the false return

//Refrence(NonPrimitive)

// Types: Array, Object, Function

// const heros=["shaktiman","ironman"];
// const myObj={
//     name:"shivam",
//     age:22,
// };
// const myfunction=function(){
    
//     console.log("Hello world");
// }
// console.log(typeof myfunction);
// console.log(heros,myObj);

// myfunction();
// console.log(myfunction())


//++++++++++++++++++++++++++
// Stack (Primitive) ,Heap (Non-Primitive)

// let myName="Shivam";
// const obj={
//     name:"Shivam",
//     rollNumber:36,
// }
// let anotherName=myName;
// anotherName="gaur"
// console.log(myName);
// console.log(anotherName);
// const gameName=new String('Shivam');
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.slice(0,4));
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(4));

 //+++++++++++++++++++++++++++++++++++++++++++++Number+++++++++++++++++++++++++

//  const  score=400;
//  const balance=new Number(score);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber=23.7899;
// console.log(otherNumber.toPrecision(2));

// const hundreds=100000000;
// console.log(hundreds.toLocaleString('en-In'))


//++++++++++++++++++++++++Maths++++++++++++++++++++++++++++
console.log(Math);
// console.log(Math.sqrt(2))
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
const min=10;
const max=20;
console.log(Math.random())
console.log(Math.floor((Math.random()*10)+1));
console.log(Math.floor(Math.random()*(max-min)+1)+min)