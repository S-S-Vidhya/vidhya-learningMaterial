// let students = ["shaji","ram","vidhya","divya"]
// students.forEach((students)=>{
//     console.log(students)
// })

// const fruits = ['apple', 'banana', 'cherry', 'orange'];

// fruits.forEach((fruit, index) => {
//     console.log(`${index + 1}. ${fruit}`)
// })

// let name = ["vidhya","divya","abin","ram"]
// name.forEach((names) => {
//     console.log("Hello" + " " + names)
// });

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number, index, array) => {
//     array[index] = number * 2;  
// });

// console.log(numbers);

// const person = { name: 'John', age: 30, city: 'New York' };

// let ans = Object.entries(person) // create a nested array
// console.log(ans)

// Object.entries(person).forEach(([k,value]) => {
//     console.log(`${k} : ${value}`);
// })

// const staffsDetails = [
//     { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
//     { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
//     { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
//     { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
// ]

// // staffsDetails.forEach(staffsDetail =>{
// //     console.log(`I am ${staffsDetail.name}`)
// // })
// let staffsDetail = Object.entries(staffsDetails)
// console.log(staffsDetail)
// let data = [5,10,15,20,25]
// const sum = data.reduce((accumulator,currentValue) => {

//     return accumulator + currentValue
// })
//     console.log(sum)

// const words = ["Hello", "world", "from", "reduce"];

// const sentence = words.reduce((accumulator, currentValue) => {
//     return accumulator + " " + currentValue;
// }, "");

// console.log(sentence)

// const fruits = ["apple", "banana", "cherry"];

// const fruitObject = fruits.reduce((accumulator, currentValue) => {
//     accumulator[currentValue] = currentValue.length;  
//     return accumulator;
// }, {});

// console.log(fruitObject)  

// const fruits = ["apple", "banana", "cherry", "date"];

// const index = fruits.indexOf("banana");

// console.log(index)

// const fruits = ["apple", "banana", "cherry", "date"];

// const index = fruits.indexOf("grape");

// console.log(index)

// const fruits = ["apple", "banana", "cherry", "banana", "date"];

// const lastIndex = fruits.lastIndexOf("banana");

// console.log(lastIndex)

// const fruits = ["apple", "banana", "cherry"];

// for (let i in fruits) {
//   console.log(i + ": " + fruits[i]);
// }

// const person = {
//     name: "Alice",
//     age: 25,
//     occupation: "Engineer"
//   };
  
//   for (let key in person) {
//     console.log(key + ": " + person[key]);  
//   }

// const fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) {
//   console.log(fruit);  
// }

const word = "JavaScript";

for (i=0;i<=word.length;i++)
{
  console.log(word[i]);  
}; 