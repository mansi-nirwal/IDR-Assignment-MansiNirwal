const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.onclick = () => {
  nav.classList.toggle("active");
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document
      .querySelector(this.getAttribute("href"))

      .scrollIntoView({
        behavior: "smooth",
      });
  });
});
