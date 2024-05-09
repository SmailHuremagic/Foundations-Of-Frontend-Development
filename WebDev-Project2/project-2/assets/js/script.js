"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  if (elem) {
    elem.classList.toggle("active");
  } else {
    console.error("Element not provided to toggle function!");
  }
};


// Header sticky & go to top
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

if (header && goTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
      header.classList.add("active");
      goTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      goTopBtn.classList.remove("active");
    }
  });
} else {
  console.error("Header or go-top button not found!");
}


// This needs definitions for handle and topPanel
document.addEventListener("DOMContentLoaded", function () {
  var parent = document.querySelector(".splitview"),
      skewHack = 0,
      delta = 0,
      handle = document.querySelector(".handle-selector"), // Add correct selector
      topPanel = document.querySelector(".top-panel-selector"); // Add correct selector

  if (!parent || !handle || !topPanel) {
    console.error("One of the split view components is missing!");
    return; // Stop further execution if essential components are missing
  }

  // Function to update the position and width of elements
  function updateView(event) {
    // Get the delta between the mouse/touch position and center point.
    delta = (event.clientX - window.innerWidth / 2) * -2;

    // Move the handle.
    handle.style.left = event.clientX + delta + "px";

    // Adjust the top panel width.
    topPanel.style.width = event.clientX + skewHack + delta + "px";
  }

  function throttle(func, delay) {
    let timeoutId;
    return function (...args) {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func(...args);
          timeoutId = null;
        }, delay);
      }
    };
  }

  // Touchend event listener to reset view when touch interaction ends outside the splitview area
  document.addEventListener("touchend", function (event) {
    var touchTarget = event.target;
    if (!parent.contains(touchTarget)) {
      resetView();
    }
  });

  // Function to reset the position and width to default
  function resetView() {
    // Move the handle to the center.
    handle.style.left = "50%";

    // Reset the top panel width to default (considering the skewHack value).
    topPanel.style.width = "calc(50vw + " + skewHack + "px)";
  }
});

function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}


/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});


/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


// my scripting


