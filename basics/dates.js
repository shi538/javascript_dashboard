
//Dates
// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log( typeof myDate);
// const myCreatedDate = new Date(2025,7,31,5,3,4);
// const myCreatedDate = new Date("2025-08-31");
// const myCreatedDate = new Date("01-12-2025");
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp =  Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log((Date.now()/1000));
// console.log(Math.floor(Date.now()/1000));



let newdate=new Date();
// console.log(newdate.getDay());
// console.log(newdate.toLocaleString());
// console.log(newdate.getMonth());
newdate.toLocaleString('default',{
  weekday:"long",
  
})
console.log(newdate.toLocaleString('default',{
  weekday:"long",
  month:"short",
  day:"numeric"
}))