
function one(){
     const username = "Shivam";
     function two(){
        const website = "Youtube";
        console.log(`Username is ${username}`);
     }
     two();
//console.log(`website name is ${website}`);
     
}
one();



//+++++++++++++++++++++++++++++++Intresting  Operation+++++++++++++++++++++++++++//

//This Function is execute 
console.log(addOne(454));

function addOne(num){
 return num+1;
}

//This funcrion is execute
// const addTwo=function(num){
//     return num+2;
// }

// console.log(addTwo(2))//This take 4

//But this function not execute

// addTwo(2); 

const addTwo=function(num){
    return num+2;
}
