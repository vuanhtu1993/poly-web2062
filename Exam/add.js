const btnAdd = document.querySelector("#btn-submit")
btnAdd.addEventListener("click",function(){
    fetch('http://localhost:3000/products/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "name":document.querySelector("#prdName").value,
            "desc":document.querySelector("#desc").value,
            "image":document.querySelector("#image").value
        })
    })
})
