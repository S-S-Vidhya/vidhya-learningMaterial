//  fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => {
//     const info =data;
//     let a = document.getElementById('tbody');
//     let sno=1
//     for(i=0;i<info.length;i++) {
//       let row = document.createElement('tr');
//       let data1 = document.createElement('td')
//       let data2 = document.createElement('td')
//       let data3 = document.createElement('td')
//       let data4 = document.createElement('td')
//       let data5 = document.createElement('td')
//       data1.textContent = sno++
//       data2.textContent = `${info[i].userId}`
//       data3.textContent = `${info[i].id}`
//       data4.textContent = `${info[i].title}` 
//       data5.textContent = `${info[i].body }`
//       row.appendChild(data1)
//       row.appendChild(data2)
//       row.appendChild(data3)
//       row.appendChild(data4)
//       row.appendChild(data5)
//       a.appendChild(row)
//     }   
// })
// .catch(error => console.error('Error:', error));  



// const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// function fetchAndDisplayData() {
    
//     fetch(apiUrl)
//         .then(response => response.json()) 
//         .then(users => {
//             const tableBody = document.querySelector('#user-table tbody'); 

//             for(let i=0;i<users.length;i++){
//               console.log(users)
//                 const row = document.createElement('tr');
                
//                 const nameCell = document.createElement('td');
//                 nameCell.textContent = users[i].name;

//                 const emailCell = document.createElement('td');
//                 emailCell.textContent = users[i].email;

//                 const phoneCell = document.createElement('td');
//                 phoneCell.textContent = users[i].phone;

//                 row.appendChild(nameCell);
//                 row.appendChild(nameCell);
//                 row.appendChild(emailCell);
//                 row.append(phoneCell);

//                 tableBody.appendChild(row);
//             };
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }
// document.addEventListener('DOMContentLoaded', fetchAndDisplayData);


// const apiUrl = 'https://jsonplaceholder.typicode.com/users';
// function fetchAndDisplayData() {    
//     fetch(apiUrl)
//         .then(response => response.json()) 
//         .then(users => {
//             const tableBody = document.querySelector('#user-table tbody'); 

//             users.forEach(user =>{
//               console.log(user)
//                 const row = document.createElement('tr');
                
//                 const nameCell = document.createElement('td');
//                 nameCell.textContent = user.name;

//                 const emailCell = document.createElement('td');
//                 emailCell.textContent = user.email;

//                 const phoneCell = document.createElement('td');
//                 phoneCell.textContent = user.phone;

//                 row.appendChild(nameCell);
//                 row.appendChild(nameCell);
//                 row.appendChild(emailCell);
//                 row.append(phoneCell);

//                 tableBody.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

// document.addEventListener('DOMContentLoaded', fetchAndDisplayData);


// const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// function fetchAndDisplayData() { 
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(users => {
//             const tableBody = document.querySelector('#user-table tbody');

//             for (let i = 0; i < users.length; i++) {
//                 const user = users[i]; 

//                 console.log(user); 

//                 const row = document.createElement('tr');

//                 const nameCell = document.createElement('td');
//                 nameCell.textContent = user.name;

//                 const emailCell = document.createElement('td');
//                 emailCell.textContent = user.email;

//                 const phoneCell = document.createElement('td');
//                 phoneCell.textContent = user.phone;

//                 const deleteCell = document.createElement('td'); 
//                 const deleteButton = document.createElement('button'); 
//                 deleteButton.textContent = 'Delete'; 
//                 deleteButton.addEventListener('click', function() {
//                     row.remove(); 
//                 });

//                 deleteCell.appendChild(deleteButton); 
//                 row.appendChild(nameCell); 
//                 row.appendChild(emailCell); 
//                 row.appendChild(phoneCell); 
//                 row.appendChild(deleteCell); 

//                 tableBody.appendChild(row); 
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

// document.addEventListener('DOMContentLoaded', fetchAndDisplayData);
   

const api = "https://jsonplaceholder.typicode.com/albums"
function fetchapi(){
   fetch(api).then(response => response.json()).then(data =>{
     const table_Body = document.querySelector('#user-table tbody')
       data.forEach(user =>{
        console.log(user)
        const row = document.createElement('tr')    
        const userCell = document.createElement('td')
        userCell.textContent = user.userId
        
        const idCell = document.createElement('td')
        idCell.textContent = user.id

        const titleCell = document.createElement('td')
        titleCell.textContent = user.title
        
        const editCell = document.createElement("td")
        const editbtn = document.createElement("button")
        editbtn.textContent = "Edit"
   
        editbtn.addEventListener("click",function(){
       
         })
        editCell.appendChild(editbtn)

        const deleteCell = document.createElement("td")
        const deletebtn = document.createElement("button")
        deletebtn.textContent = "Delete"

        deletebtn.addEventListener("click", function(){
            row.remove()
        })
        deleteCell.appendChild(deletebtn)
        row.appendChild(userCell)
        row.appendChild(idCell)
        row.appendChild(titleCell)
        row.appendChild(editCell )
        row.appendChild(deleteCell)

        table_Body.appendChild(row)

       })
   })
   .catch(error => {
    console.error('Error fetching data:', error);
        })
}
document.addEventListener('DOMContentLoaded', fetchapi);