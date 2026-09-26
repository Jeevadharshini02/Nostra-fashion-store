var sidenav = document.querySelector(".side-navbar")
function showNavbar() 
{
    sidenav.style.left = "0"
}

function closeNavbar() 
{
    sidenav.style.left = "-60%"
}

var shopbtns =document.querySelectorAll(".new-arrival-container button")

shopbtns.forEach(function (button) {
    button.addEventListener("click", function () {
        window.location.href = "collection.html";
    });
}); 
