
const user = {
    username:"Shivam",
    email:"shivam@example.com",
    password:"1234",
    getUserDetails:function(){
        console.log(this);
        
        // console.log("Get userdetails from database");
    }
}

const user2 = {
    username:"Shivam2",
    email:"shivam@example.com",
    password:"1234",
    getUserDetails:function(){
        // console.log(this);
        
        // console.log("Get userdetails from database");
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// const promiseOne = new Promise()


// console.log(this)

 function User(username,logginCount,isLoggedIn){
     this.username = username;
     this.logginCount = logginCount;
     this.isLoggedIn =isLoggedIn;
     this.greeting = function (){
        console.log(`welcome ${this.username}`)
     }
     return this;
 }

  const userOne = new User("Shivam",12,true);
  const userTwo = new User("Chai",11,false)
  console.log(userOne.constructor);
  console.log(userTwo);

  

  