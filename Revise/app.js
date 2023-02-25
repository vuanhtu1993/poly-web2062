import {localStorageService} from './service.js'
// DOM
const form = document.querySelector('#form')
const fields = ["name", "price", "description"]

form.onsubmit = (event) => {
    event.preventDefault()
    let validate = true
    let data = {}
    fields.forEach((field) => {
        const element = document.querySelector("#" + field)
        const errorElement = document.querySelector(".error-" + field)
        if (!element.value) {
            validate = false
            errorElement.innerHTML = "Dữ liệu không đươc trống"
        }
        data[field] = element.value
    })
    if (validate) {
        const products = localStorageService.get("products")
        if (products) {
            localStorageService.set("products", [...products, data])
        } else {
            localStorageService.set("products", [data])
        }
    }
    render()
}

const render = () => {
    const products = localStorageService.get("products")
    document.querySelector('tbody').innerHTML = `
    ${products.map((product, index) => {
        return `
        <tr>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ${index + 1}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">${product.name}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">${product.price}r</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">Sửa/xoá</td>
        </tr>
        `
    })}
    
    `
}

render()