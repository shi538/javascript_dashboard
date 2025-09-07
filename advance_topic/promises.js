
// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("promised consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//      console.log("Async Task Two");
//      resolve();
//     },1000)
// }).then(function(){
//     console.log("Hai");

// })

// const promiseThree = new Promise(function(resolve,reject){
//      setTimeout(function(){
//         resolve({username:"shivam","email":"shivam@examle.com"});
//      },1000)
// })

// promiseThree.then(function(user){
// console.log(user);
// console.log(user.username);


// })

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Shivam", password: "123" })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
.then(function (user) {
    // console.log(user)
    return user.username;
}).then((myuserName) => {
    // console.log(myuserName)
}).catch((err) => {
    console.log(err)
}).finally(()=>{
    // console.log("The promise is either resolve or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
    // console.log("hai")
       setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "javaScript", password: "123" })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})


async function consumePromiseFive(){
    try{
      const response = await promiseFive;
    //   console.log(response)
     }catch (err){
        // console.log(err)
    }
    
};
consumePromiseFive()

 async function getallUsers(){
    try {
        const response  = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        const r = result.map((shivam)=>{
            // console.log(shivam)
            //  log(shivam);
            return shivam;
        });


        // function log(df){
            
        //     console.log(`${df.id}--> ${df.phone}`)
        // }
        console.log(typeof r)

        r.map((data)=>{
            console.log(data.id)
        })
        // console.log(result.map((shivam)=>{
        //     console.log(shivam.id)
        // }));
        
    } catch (error) {
     console.log(error)
        
    }
 }
 getallUsers()