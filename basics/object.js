// singleton
//object.create

//object literals

const mySym = Symbol("key1");
const jsUser = {
    name:"shivam",
    "full name":"Shivam Gaur",
    [mySym]:"myKey1",//this take a   [Symbol(key1): 'myKey1']
    mySym:"myKey1",
    age:18,
    location:"Jaipur",
    email:"shivamgaur6272@gmail.com",
    isLoggrdIn:false,
    lastLoginDays:["Monday","Tuesday"]
};
// console.log(jsUser.email)
// console.log(jsUser)
// console.log(jsUser["fullName"])
// console.log(typeof jsUser[mySym])
// console.log(typeof jsUser["fullName"])
// Object.freeze(jsUser);//this method is freeze the object i can not vhange the value off the object

// jsUser.fullName="shivamhfsdh";
// jsUser.email="shivamchatgpt.com";
// console.log(jsUser["fullName"]);
// console.log(jsUser.email);
// console.log(jsUser["full name"]);
jsUser.greeting=function(){
    // console.log("Hello Js user");
}

jsUser.greetingTwo=function(){
    // console.log(`Hello Js user,${this["full name"]}`);
    // console.log(`Hello Js user,${this.name}`);

}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


// singleton
//object.create


// const tinderUse =  new Object();
const tinderUser={};
tinderUser.id = "1223sdd";
tinderUser.name="shivam";
tinderUser.email="shivam@123gmail.com"
// console.log( tinderUser["id"])
const regularUser={
   email:"shivam@gmail.com",
   fullName:{
    username:{
        firstName:"Shivam",
        lastName:"Gaur",
    }
   }
}
// console.log(regularUser.fullName.username.firstName)
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};


// const obj3 = {obj1,obj2};
// const obj3  = Object.assign(obj1,obj2)
// const obj4  = Object.assign({},obj1,obj2)
const obj3={...obj1, ...obj2}  //Spread Operator  
const users=[
    {
        id:1,
        email:"shiavm@123gmail.com"
    },
    {
        id:2,
        email:"shiavm@123gmail.com"
    },
    {
        id:3,
        email:"shiavm@123gmail.com"
    }
]

// console.log(Object.keys(users[0]));
// console.log(users[0].email);
// console.log(obj3)

// console.log(tinderUser)
const tinderUser_keys=Object.keys(tinderUser);//find the keys of the object
const tinderUser_values=Object.values(tinderUser);//find the values of th4e object


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('id'));//find the propert is  exist and 



// console.log(tinderUser_keys[0])
// console.log(tinderUser_values[0])


const course = {
    courseName:"JavaScript",
    price:999,
    courseInstructer:"hitesh"
}

//couser.courseInstructer
//      OR      
//  const {courseInstructer} =  course;//destructer
//this take a same output for hitesh 

 const {courseInstructer:Instructer} =  course;

 console.log(Instructer);

// {
//     "name":"Shivam",
//     "cousename":"js"
// }
