const words = ["Web Developer", "Web Designer", "UI/UX Designer", "Frontend Developer", "Backend Developer", "Full-stack Web Developer" ];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const typingSpeed = 150; // Speed of typing
const deletingSpeed = 150; // Speed of deleting
const delayBetweenWords = 300; // Delay before switching to the next word

const typingElement = document.getElementById("typing-effect");

function typeEffect() {
    const currentWord = words[currentWordIndex];
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, currentCharIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0, currentCharIndex++);
    }

    if (!isDeleting && currentCharIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// Sliding Effect
let index = 0;
const projectContainer = document.querySelector('.project-container');
const projectBoxes = document.querySelectorAll('.project-box');

function slideProjects() {
    index = (index + 1) % projectBoxes.length; // Loops through projects
    projectContainer.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideProjects, 3000); // Auto-slide every 3 seconds

// Fullscreen View Functionality
const fullscreenContainer = document.getElementById('fullscreen-container');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeBtn = document.getElementById('close-btn');

// Function to display only the image in fullscreen
function viewImage(link) {
    const projectBox = link.closest('.project-box'); // Get the project box
    const projectImage = projectBox.querySelector('.project-box-img img'); // Get first image

    if (projectImage) {
        fullscreenImage.src = projectImage.src; // Set fullscreen image source
        fullscreenContainer.style.display = 'flex';
    } else {
        console.error("Image not found!"); // Debugging message
    }
}

// Close fullscreen on button click
closeBtn.addEventListener('click', () => {
    fullscreenContainer.style.display = 'none';
});

menu = document.querySelector(".menu");
menu.onclick = function() {
  navBar = document.querySelector(".nav");
  navBar.classList.toggle("active");
  menu = document.querySelector(".menu");
  menu.classList.toggle("active")
}

document.querySelectorAll(".nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav").classList.remove("active");
        document.querySelector(".menu").classList.remove("active"); // Also resets the menu button state
    });
});

// redirect code to thankyou.html  
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form behavior
    window.location.href = "thankyou.html"; // Redirect user
});