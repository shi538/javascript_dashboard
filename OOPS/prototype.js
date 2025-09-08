
// const myName = "Shiavm   ";
// console.log(myName.toLenght())






let myHeros = ["thor", "spiderman"];


let heroPower = {
    thor: "hamer",
    spiderman: "sling",
    getSpiderrPower: function () {
        //   console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.shivam = function () {
    // console.log(`Shivam is present in all object`);
}   //this function is take the prototypeof globaly and set the prototype for object and every object,and every array and every function is can easily access the method

Array.prototype.heyShivam = function () {
    // console.log(`Shivam asys hellow`);

}///this function is only assign the the prototype  for all array but  the i can access the prototype for object and function they can take the  prototype.....

//  heroPower.shivam()
//  myHeros.shivam()
myHeros.heyShivam()
//  heroPower.heyShivam()

// Inheritance


const user = {
    username: "Shiavm",
    email: "shivam@example.com",
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


Teacher.__proto__ = user;


//modern_syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport.makeVideo);



let anotherUserName = "shiavm    ";
let myName = "Shiavm Gaur   ";

String.prototype.trueLenght = function () {
    // console.log(`${this}`)
    // console.log(`True Lenght is ${this.trim().length}`)
}

anotherUserName.trueLenght()
// myName.trueLenght()
"hitesh".trueLenght()

// ++++++++++++++++jis na call kiya vahi (this) hai////////////////


const chai = ()=>{
    console.log(`${this}`);
    
}
 function shivam(){
    console.log(`${this}`)
 }

 chai();
 shivam()