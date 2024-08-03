/* Toggle style switcher */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* Theme colors */
const alternateStyles = document.querySelectorAll(".alterate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}


/* Theme light */

// Select the day-night toggle element
const dayNight = document.querySelector(".day-night");

// Add click event listener to toggle the theme
dayNight.addEventListener("click", () => {
    // Toggle icon classes
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    // Toggle dark mode on the body
    document.body.classList.toggle("dark");
});

// Set initial icon based on the current theme
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon"); // Ensure moon icon is removed
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").classList.remove("fa-sun"); // Ensure sun icon is removed
    }
});
