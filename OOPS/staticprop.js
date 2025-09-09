
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username ${this.username}`)
    }
    static createId(){
        return `123`
    }

}

const shivam = new User("shivam");

// console.log(shivam.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}


const obj = new Teacher("shivamGaur", "shivam@example.com")
console.log(obj)
// console.log(obj.createId())//I am not access the static datamember 

// I am directly access the static  member in using the  className example 

console.log(User.createId())//This take the value of the createId function 
console.log(Teacher.createId())//This take the value of the createId function 
