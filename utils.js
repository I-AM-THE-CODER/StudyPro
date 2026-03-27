// This file contains utility functions used throughout the application.

// Function to generate a unique ID for new resources
function generateId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

// Function to format dates to a readable string
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Function to validate URL format
function isValidUrl(string) {
    const res = string.match(/(https?:\/\/[^\s]+)/g);
    return (res !== null);
}

// Function to debounce input for search functionality
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}