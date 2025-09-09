
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`COURSE added successfully`);
        
    }
}


const obj1 = new User("shivam");
// console.log(obj1);
const obj2 = new Teacher("shivamgaur", "shivam@example.com", "shivam@123")
// console.log(obj1.logMe());
// console.log(obj2.addCourse());//this constructer is overwrite the value of the first constructer calling
// console.log(obj2.logMe());//this constructer is receve the any value of the parent constructer


console.log(obj2 instanceof User);




