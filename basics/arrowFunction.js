
const user = {
    userName:"Shivam",
    price:222,
    welcomeMessage:function(){
        console.log(`${this.userName}, welcome to the website`);
        console.log(this)
    }
}

// user.welcomeMessage();
// user.userName = "saim"
// user.welcomeMessage();

//  console.log(this)

function chai(){
    let userName="shivam";
 console.log(this)
}


// const chai=()=>{
//     console.log(this)
// }

// chai();
//++++++++++++++   First Type+++++++++++++++++++//

// const addTwo=(num1,num2)=>{ Explecit  Return -> //output is 6
//    return num1+num2;
// }

//+++++++++++++++++++++++Second Type +++++++++++++++++

// const addTwo=(num1,num2)=>num1+num2 //output is 6


//+++++++++++++++++++++++++ Third Type ++++++++++++++++++++++++

// const addTwo=(num1,num2)=>
//     (num1+num2) // Implecit Return -> Again this take 6


const addTwo=(num1,num2)=>
    ({username:"hitesh"}) // Implecit Return -> Again this take { username: 'hitesh' }


// console.log(addTwo(3,3))

const obj = {
  name: "Shivam",

  normalFn: function () {
    console.log("Normal:", this.name);
  },

  arrowFn: () => {
    console.log("Arrow:", this.name);
  }
};

obj.normalFn(); // ✅ "Normal: Shivam"  (this = obj)
obj.arrowFn();  // ❌ "Arrow: undefined" (this = outer scope, not obj)
