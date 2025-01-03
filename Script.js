// JavaScript to add smooth scroll and active link highlight functionality
const navLinks = document.querySelectorAll('nav ul li a');
const headerLinks = document.querySelectorAll('nav a');

// Smooth scroll functionality
headerLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetElement = document.getElementById(targetId);

        // Scroll to the section smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Highlight the active link when clicked
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active', 'clicked'));
        // Add 'active' and 'clicked' classes to the clicked link
        this.classList.add('active');
        this.classList.add('clicked');
    });
});
