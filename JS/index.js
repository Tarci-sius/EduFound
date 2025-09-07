const hamburgerEl = document.querySelector(".hamburger-btn");
const navEl = document.querySelector("nav");
// console.log(hamburgerEl);
// console.log(navEl);



hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("max-md:hidden");
});