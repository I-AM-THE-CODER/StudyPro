// This file handles the toggle functionality for dark mode.

const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
};

// Check for user's preference on page load
const checkDarkModePreference = () => {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
    }
};

// Event listener for dark mode toggle button
document.addEventListener('DOMContentLoaded', () => {
    checkDarkModePreference();
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});