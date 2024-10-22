'use strict';

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}


const themeToggleBtn = document.querySelector("[data-theme-btn]");

// Add event listener for theme toggle button
themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  // Check if the button has the 'active' class to determine the current theme
  if (themeToggleBtn.classList.contains("active")) {
    // Switch to light theme
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    // Save light theme preference in local storage
    localStorage.setItem("theme", "light_theme");
  } else {
    // Switch to dark theme
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    // Save dark theme preference in local storage
    localStorage.setItem("theme", "dark_theme");
  }
});

// Check local storage for theme preference on page load
if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  // Default to dark theme
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


document.getElementById("loadMoreBtn").addEventListener("click", function() {
    window.open('https://github.com/theriturajps?tab=repositories', '_blank');
});

document.getElementById("resume").addEventListener("click", function() {
    window.open('./assets/resume/riturajps-resume.pdf', '_blank');
});
