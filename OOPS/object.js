
function multiplyby5(num){
     return num*num;
}

multiplyby5.power = 2;

// console.log(multiplyby5(5));
// console.log(multiplyby5.power);
// console.log(multiplyby5.prototype);


function createUser(username,srcore){
    this.username = username;
    this.score = srcore;

}

createUser.prototype.increment = function(){
    this.score++;
    
}

createUser.prototype.printMe = function(){
     console.log(`Score is:${this.score}`);
     
}


const first = new createUser("Shivm",345);
const second = new createUser("Gaur",333);

console.log(typeof first)
console.log( first.increment())

first.printMe()





