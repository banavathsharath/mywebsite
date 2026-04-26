// Theme toggle
document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Typing effect
const text = ["Frontend Developer", "JavaScript Enthusiast", "UI Designer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    if (i < text.length) {

        if (!isDeleting && j <= text[i].length) {
            current = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            current = text[i].substring(0, j--);
        }

        document.querySelector(".typing").textContent = current;

        if (j == text[i].length) isDeleting = true;
        if (j == 0) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0;
    }

    setTimeout(type, 100);
}

type();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});