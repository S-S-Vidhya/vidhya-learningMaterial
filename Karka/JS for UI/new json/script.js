fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => {
    const product = data;
    console.log(product)
})
.catch(err => console.error(err))