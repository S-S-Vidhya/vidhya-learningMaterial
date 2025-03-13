// fetch("./basic.json").then(res => res.json()).then (data => {
//    const product = data
//    console.log(product.person2)
//    document.getElementById("name").innerHTML = 
//    `Name :${product.person2 .name} `
//     document.getElementById("place").innerHTML = 
//     `Place :${product.person1.place} `
//     document.getElementById("no").innerHTML = 
//     `Number :${product.person1.no} `
// })
// .catch(err => console.error("Error Fetching the Json:",err));
 

fetch("./index.json").then(res => res.json()).then(data => {
    const product = data.Details
    var a = document.getElementById("div")
    for (let i = 0; i < product.length; i++) {
        var b = product[i]
        var p = document.createElement("p")
        var result =`Name:${b.name},<br> age :${b.age},<br> Number: ${b.number}`
        p.innerHTML = result
        a.appendChild(p)

        }
    
}).catch(err => console.error("Error Fetching the Json:", err));

