var cartContainer = document.getElementById("cart-container")

var cart = JSON.parse(localStorage.getItem("cart"))||[]

cart.forEach(function(product){
    var cartProduct = document.createElement("div")

    cartProduct.classList.add("cart-product")
    cartProduct.innerHTML = `
    <img src="${product.image}">
    <p>${product.name}</p>
    <button>Remove</button>`

    cartContainer.appendChild(cartProduct)
    var removeButton = cartProduct.querySelector("button")
    removeButton.addEventListener("click",function(){
        cart.splice(indexedDB,1)
        localStorage.setItem("cart",JSON.stringify(cart))

        cartProduct.remove()
    })
    
})

var exit = document.getElementById("b1")

exit.addEventListener("click",function(){
    window.location.href = "contact.html";
})