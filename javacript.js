


const icon = document.getElementById("icon");
const menu = document.getElementById("menu");  


icon.addEventListener("click",() =>
{
    if(menu.className === "hidden") {
        menu.classList.remove("hidden");
    }
    else{
        menu.classList.add("hidden");
    }
})


const notification = document.getElementById("notification");
const Cartbox = document.getElementById("Cartbox");  


notification.addEventListener("click",() =>
{
    if(Cartbox.className === "cartbox") {
        Cartbox.classList.remove("cartbox");
    }
    else{
        Cartbox.classList.add("cartbox");
    }
})
