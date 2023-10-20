const app = document.querySelector("#app")

const removeProduct = (id) => {
    fetch('http://localhost:3000/products/' + id, {
        method: "DELETE"
    })
}

// CÁCH 1
// const listProduct = () => {
//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(data => {
//             app.innerHTML = data.map((product)=>{
//                 return`
//                     <tr>
//                         <td>${product.name}</td>
//                         <td>${product.desc}</td>
//                         <td><img src=${product.image}></td>
//                         <td>
//                             <button><a href='update.html?id=${product.id}'>Update</a></button>
//                             <button><a href='index.html?id=${product.id}'>Remove</a></button>
//                         </td>
//                     </tr>
//                 `
//             }).join("")
//             const params =new URLSearchParams(document.location.search)
//             const id = params.get("id");
//             if(id != null){
//                 fetch('http://localhost:3000/products/'+id,{
//                     method:"DELETE"
//                 }).then(()=> window.location.href='index.html')
//             }
//         })
// }

// CÁCH 2
const listProduct = () => {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            app.innerHTML = data.map((product) => {
                return `
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.desc}</td>
                        <td><img src=${product.image}></td>
                        <td>
                            <button><a href='update.html?id=${product.id}'>Update</a></button>
                            <button class="btn-remove" data-id="${product.id}">Remove</button>
                        </td>
                    </tr>
                `
            }).join("")

            let btnRemove = document.querySelectorAll(".btn-remove")
            for (let btn of btnRemove) {
                let id = btn.dataset.id
                btn.addEventListener('click', function () {
                    return removeProduct(id)
                })
            }
        })
}

if (app) {
    listProduct()
}