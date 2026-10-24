
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Ahmed Waleed's Portfolio!");

    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigating to: " + link.textContent);
        });
    });
});
