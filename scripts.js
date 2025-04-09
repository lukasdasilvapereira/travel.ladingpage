const items = document.querySelector(".nav-section");
const abr = document.querySelector(".open");
const cls = document.querySelector(".close");

abr.addEventListener("click", () => {
    items.style.display = "flex";
    abr.style.display = "none";
    cls.style.display = "flex"; // trocar visibility por display
});

cls.addEventListener("click", () => {
    items.style.display = "none";
    abr.style.display = "flex";
    cls.style.display = "none"; // trocar visibility por display
});
