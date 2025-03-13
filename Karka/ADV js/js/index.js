let data = [[1,2],[3,4],[4,5]]
let result = data.map(number =>number.map(num => num*2))
console.log(result)

const students = [{name: 'John',age:17},{name:"ashik",age:20},{name:"suresh",age:18},{name:"ram",age:18}]
const result1 = students.filter(student => student.age >= 18 )
console.log(result1)

let item = ['lion','cat','elephant','birds','fish']
let result2 = item.filter(item => item.length > 3)
console.log(result2)



