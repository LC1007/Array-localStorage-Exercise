let items = [{
    name: 'John',
    age: 50,
    img: 'https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},{
    name: 'Mark',
    age: 25,
    img: 'https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},{
    name: 'Matt',
    age: 30,
    img: 'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}]

let storeArr = localStorage.setItem('data', JSON.stringify(items))

let information = JSON.parse(localStorage.getItem('data'))

console.log(information);

let tableBody = document.querySelector('#table-body')

tableBody.innerHTML = ''

information.forEach((data)=>{
    tableBody.innerHTML +=
    `
    <tr>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td><img src="${data.img}" style="width: 10rem" alt=""></td>
    </tr>

    `
})

