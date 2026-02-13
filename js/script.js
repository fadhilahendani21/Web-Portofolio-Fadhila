/* ================= FORCE START FROM TOP ================= */
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

/* ================= SCROLL ANIMATION ================= */
const sections = document.querySelectorAll("section");

const options = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        }
    });
}, options);

/* INIT STYLE */
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.9s ease-out";
    observer.observe(section);
});

/* ================= CSS INJECTION ================= */
document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    style.innerHTML = `
        section.appear {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});