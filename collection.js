var productcontainar = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productcontainar.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (i = 0; i < productlist.length; i = i + 1) {
        var productname = productlist[i].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"
        }

    }
})
 var cartbtn=document.querySelectorAll(".product-box button")

 cartbtn.forEach(function(button){
    button.addEventListener("click",function(){
        window.location.href="cart.html";
    })
 })
