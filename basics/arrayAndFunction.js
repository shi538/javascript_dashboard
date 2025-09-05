console.log("Hai");

const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros =["superman","dfsfw","ffaf"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros)

// const all_new_heross = [...marvel_heros, ...dc_heros];//use spread operateradding  one array to second array
// console.log(all_new_heross)

const another_array = [1,2,[4,5,6],[6,7,[7,8]]];
// const real_another_array =  another_array.flat(Infinity);
// console.log(real_another_array)//[1, 2, 4, 5, 6, 6, 7, 7, 8]


// console.log(Array.isArray("Hitesh"))//false return
// console.log(Array.from("Hitesh"))//transformed String to array  this  take [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name:"shivam"}))  // this take a empty array
let score1="100";
let score2="200";
let score3="200";
let score4="400";
const number_to_Array=Array.of(score1,score2,score3,score4);//this take the array  for this array is [ 100, 200, 200, 400 ]s
console.log(number_to_Array)