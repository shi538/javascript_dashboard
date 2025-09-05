
//For of loop----->>>>

const arr = [1,2,3,4,5,6,7,8,9,10];

for(num of arr){
    // console.log(num);//This take the output is 1 2 3 4 5 6 7 8 9 10
}

const greeting = "Helloworld";

for(greet of greeting){
    // console.log(`Every char is ${greet}`)
}


//Maps

const map =  new Map();

map.set('IN',"India");
map.set('US',"United State Of Ameriaca");
map.set('Fs',"France");
 
for( const [key,value] of map){
   // console.log(`${key} - ${value}`);//this take the 
                                        // IN - India
                                        // US - United State Of Ameriaca
                                        // Fs - France
}

//For of loop is not working the object

                //++++++++++++++++++++for in++++++++++++++++++++

//++++++++++++++++++++Object is use the for in loop+++++++++++++++++

const myObject = {
    js:"javaScript",
    cpp:"c++",
    py:"python",
    swift:"swift",

}

for(const key in myObject){
    // console.log(`key of the object is - ${key} and value of the object is - ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"];


for( const key in programming){


    // console.log(` ${key} and value is ${programming[key]}`);
    
}
 //+++++++++++++++++++++++ for each loop+++++++++++++++++++++++++++++


//  const coding = ["js","ruby","java","python","cpp"];

//  const user={
//     name:"shivam",
//     email:"shivamgaur887@gmail.com"
//  }

//   const printArray=(item)=>{
//     console.log(item)
//   }

//  coding.forEach(printArray)//this take the same output 



 const user={
    name:"shivam",
    email:"shivamgaur887@gmail.com"
 }

//Loop is use the array element

//   coding.forEach((item,index,arr)=>{//item take the value of the single item and index take the  position of the array element and arr take tthe full array 
        //  console.log(index,item,arr)
//  });//


 const myCoding=[
    {
        language:"javaScript",
        courseprice:677
    },

    {
        language:"python",
        coursePrice:"9780",
    }
  
]




myCoding.forEach((item)=>{
//   console.log(item.language);
});


 const coding = ["js","ruby","java","python","cpp"];

//  const values=coding.forEach((item)=>{
//     return item
// })

//forEach loop is not return the any value  they return the undefined

// console.log(values)

// coding = ["js","ruby","java","python","cpp"];

let langArray=[];
coding.forEach((item)=>{
    langArray.push(item);
})

// console.log(langArray.toString().length)


//+++++++++++++++++++++filter method+++++++++++++++++++++++


const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumbers.filter((num)=>{
    
    return (num>4);
})

// console.log(newNums)



// const books = [
//     {
//        name:"Mahan",
//        language:"Hindi",
//        publication:1990
//     },
//     {
//        name:"E-Balaguaswami",
//        language:"c",
//        publication:1980
//     },
//     {
//        name:"E-Balaguaswami",
//        language:"C++",
//        publication:1970
//     },
// ];

// const mybooks = books.filter((bk)=>bk.publication>1978);
// //   console.log(mybooks)
 
  
//   mybooks.forEach((item)=>{
    
//     // console.log(item.publication)
// })


//+++++++++++++++++++++++++++++++++ this is similiar to any function ((item)=>{
//    return  item  })   and (()=> item)++++++++++++++++++++++++++++++++++++



//+++++++++++++++++++++++++Using the map method +++++++++++++++++++++++++++++
const myNumber = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNumber.map((item)=> item+10);
// const newNum = myNumber.map((item)=> item+10).map((item)=>item-2)[9,10,11,12,13,144,15,16,17,18,19]
const newNum = myNumber.map((item)=> item+10).map((item)=>item-2).filter((item)=>item>15)//this take the [ 16, 17, 18 ]


// console.log(newNum)

//+++++++++++++++  Discussion the Array.reduce() +++++++++++++++++++


const array = [1,2,3,4,5,6,7,8,9,10];

 //Initial value of the accumelaor is 0 and next iteartion accumelaor value is currval + accumelaotor value
  
// const myTotal = array.reduce( function (accumelator,currVal){
//     return accumelator+currVal;
// },0)

// console.log(myTotal)

const books = [
    {
       name:"Mahan",
       language:"Hindi",
       publication:1990,
       price:1000,
    },
    {
       name:"E-Balaguaswami",
       language:"c",
       publication:1980,
       price:1999,
    },
    {
       name:"E-Balaguaswami",
       language:"C++",
       publication:1970,
       price:3000,
    },
];

const totalBookRsArr = [];

const  bookPrice = books.forEach((item)=>{
    totalBookRsArr.push(item.price)
})

const totalRs = totalBookRsArr.reduce((acc,currVal)=>{
    console.log(`acc:${acc} and currVal:${currVal}`)
      return acc+currVal;
},0);


console.log(`Total price of the all courses:${totalRs}`)


















