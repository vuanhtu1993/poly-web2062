const table = document.querySelector("#table")
fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => render(data))

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
                    <button style="background-color: red">Xoá</button>
                    <button style="background-color: blue">Cập nhật</button>
                </td>
            </tr>
        `
    })
    table.innerHTML = text
}