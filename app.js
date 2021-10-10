const header = document.querySelector(".header-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        header.classList.add("header-sticky");
    } else {
        header.classList.remove("header-sticky");
    }
})