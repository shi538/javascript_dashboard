
function SetUsername(username){
    //Complex calculation
    this.username = username;
    console.log("Called");
    
}

function createUser(username, email, password){
   SetUsername.call(this, username)//call is hodl the refrence of the function 
    this.email = email;
    this.password = password;
}


const User = new createUser("shivam", "shivam@example.com", "shiva@1233") ;

console.log(User)