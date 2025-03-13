//task 1
// let a = [1,2,3,4,5]
// const b =[]
// function sqaure(a){
//       for(i=0;i<a.length;i++)
//       {
//        b.push (a[i]*a[i])
//       }
//       return b
// }
// console.log(sqaure(a))


// let a = [1,2,3,4,5]
// let b = a.map(x => x*x)
// console.log(b)

//task 2
// function merge(){
//   const obj1 = { a: 1, b: 2 };
//   const obj2 = { c: 3, d: 4 };
//   const obj3 = { e: 5, f: 6 };
//   const res = {...obj1, ...obj2, ...obj3}
//   return res
// }
// console.log(merge())

//task 3
// const students = [
//     { name: 'Alice', score: 85 },
//     { name: 'Bob', score: 92 },
//     { name: 'Charlie', score: 78 }
//     ];
// const student = students.map(student => student.name === "Bob" ? student.score : null)
// console.log(student)

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];
  
//   const bobAge = people.map(person => person.name === 'Bob' ||  person.age>12).filter(age => age); 
//   console.log(bobAge[0])


//task 4
// let a = [1, 2, 2, 3, 4, 4, 5]
// let b =[]
// function unique(a){
//     b.push( ...new Set(a));
//     return b
// }
// console.log(unique(a))

//task 5
// let a = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'] 
// function len(a){
//   return a.filter(fruits => fruits.length>5)
// }
// console.log(len(a))

//task 6
// let a = [1,2,3,4,5]
// function product(a){
//   let b = a.reduce((accumulator,currentvalue)=>{
//     return  accumulator * currentvalue
//   })
//   return b 
// }
// console.log (product((a)))

//task 7
// const numbers = [1, 2, 3, 2, 4, 2, 5];
// function index(numbers){
//   const num = numbers.indexOf(2)
//   const num1 =numbers.lastIndexOf(2)
//   const result = `{First index : ${num} , Last Index : ${num1}}`
//   return result
// }
// console.log(index(numbers))

//task 8
// function isArray(){
//   return Array.isArray(arr2)
// }
// let arr1 = "Hello"
// let arr2 = [1,2,3,4,5]
// console.log(isArray(arr2))

//task 9
// const a = 'The quick brown fox jumps over the lazy dog'
// function include(a){
//     return a.includes('fox')
// }
// console.log(include(a))

//task 10
// let a = ['apple', 'banana', 'cherry']
// const list = a.keys()
// for (let key of list)
// {
//    console.log(key)
// }

//task 11
// let a = 'apple banana apple grape apple'
// function replace(a){
//   return a.replaceAll("apple","orange")
// }
// console.log(replace(a))

//task 12
// function isinclude(){
//   return a.includes('banana')
// }
// const a = ['apple', 'banana', 'cherry']
// console.log(isinclude(a))

//task 13
//task 14

//task 15
// let name = "John"
// let age = 30
// let result = `Hello! My name is ${name} and my age is ${age}`
// console.log(result)

//task 16
// let obj = { name: 'Alice', age: 25, city: 'New York' }
// let {name,age ,city}=obj
// console.log(name)
// console.log(age)
// console.log(city)

//task 17
// function sum(a,b)
// {
//     return a+b
// }
// let num1 = sum(5,20)
// console.log(num1)

// function sum(a,b=10)
// {
//     return a+b
// }
// let num1 = sum(5)
// console.log(num1)

//task 18

//task 19
// let a = [1,2,3,4,5]
// function sum(a){
//     return a.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// }
// console.log(sum(a))

//task 20
// let a = [1,2,3,4,5]
// function product(a)
// {
//     return a.reduce((accumulator,currentValue)=> accumulator*currentValue)
// }
// console.log(product(a))

//task 21
// let a = ['apple', 'banana', 'cherry', 'date']
// let longestString = a.reduce((accumulator, currentValue) => {
//     if (currentValue.length > accumulator.length) {
//         return currentValue
//     } 
//     else{
//         return accumulator
//     }
// }, '')
// console.log(longestString)

//task 22
// let a = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
// let b = a.reduce((accumalator,currentValue)=> [...accumalator , ...currentValue] ,[])
// console.log(b)

//task 27
// let a = [1, 3, 7, 10, 2]
// let b = a.find(val => val%2 ==0)
// console.log(b)

//task 28
// const students = [
//     { name: 'Alice', age: 21 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 23 }
//     ];
// const findStudentByName = students.find(student => student.name==="Bob")
// console.log(findStudentByName)

//task 29
// const products = [
//     { id: 101, name: 'Laptop' },
//     { id: 102, name: 'Phone' },
//     { id: 103, name: 'Tablet' }
//     ];
// const findStudentByProduct = products.find(product => product.id === 102)  
// console.log(findStudentByProduct)

//task 30
// const tasks = [
//     { taskName: 'Task 1', dueDate: '2023-06-01' },
//     { taskName: 'Task 2', dueDate: '2024-05-01' },
//     { taskName: 'Task 3', dueDate: '2024-01-01' }
//     ];
// const findOverdueTask = tasks.find(task => task)
// console.log(findOverdueTask)

//task 31
// let a = [-5, -3, 0, 9, 2]
// let b = a.find(val => val > 0)
// console.log(b)

//task 32
// const books = [
//     { title: '1984', author: 'George Orwell' },
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
//     ];
// const findBookByTitle = books.find(book => book.title === "1984")   
// console.log(findBookByTitle)

//task 33
// const employees = [
//     { id: 1, name: 'Alice', position: 'Manager' },
//     { id: 2, name: 'Bob', position: 'Engineer' },
//     { id: 3, name: 'Charlie', position: 'Technician' }
//     ];
// const findEmployeeById = employees.find(employee => employee.id ==2)
// console.log(findEmployeeById)    

//task 34
let a = [4, 6, 8, 9, 11, 15]
let b = a.find(val => Math.sqrt(val) % 2 == 0)
console.log(b)