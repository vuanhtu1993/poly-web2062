// Code dong bo
const table = document.querySelector("#table")
// Code bat dong bo
fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => render(data))
    .then(() => {
        // Code dong bo
        const deleteBtns = document.querySelectorAll(".delete-btn")
        for (let btn of deleteBtns) {
            btn.addEventListener('click', function () {
                const id = btn.dataset.id
                fetch("http://localhost:3000/products/" + id, {
                    method: "DELETE",
                })
            })
        }
    })

function render(data) {
    let text = ""
    data.forEach(function (product, index) {
        text += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td><img src=${product.image}/></td>
                <td>${product.price}</td>
                <td>
                    <button class="delete-btn" data-id=${product.id} style="background-color: red">Xoá</button>
                    <button style="background-color: blue">Cập nhật</button>
                </td>
            </tr>
        `
    })
    table.innerHTML = text
}