const updateForm = document.querySelector("#update-form")
const params =new URLSearchParams(document.location.search)
const id = params.get("id");
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        const currentProduct = data.find((product)=>{
            return product.id == id
        })
        updateForm.innerHTML = `
            <form action="index.html">
                <input type="text" value="${currentProduct.name}" id="prdName">
                <input type="text" value="${currentProduct.desc}" id="desc">
                <input type="text" value="${currentProduct.image}" id="image">
                <button type="submit" id="btn-submit">Update</button>
            </form>
        `
        let btnSubmit = document.querySelector("#btn-submit")
        btnSubmit.addEventListener('click',function(){
            // e.preventDefault()
            fetch(`http://localhost:3000/products/${id}`,{
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    "id":id,
                    "name":document.querySelector("#prdName").value,
                    "desc":document.querySelector("#desc").value,
                    "image":document.querySelector("#image").value
                })
            })
        })
    })