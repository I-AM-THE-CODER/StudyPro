// Main JavaScript file for the Exam & Study Tracker application

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadInitialData();
});

// Load initial data from localStorage or set up default values
function loadInitialData() {
    const exams = loadExamsFromStorage();
    const studyMaterials = loadMaterialsFromStorage();
}

// Load exams from localStorage
function loadExamsFromStorage() {
    return JSON.parse(localStorage.getItem('exams')) || [];
}

// Load study materials from localStorage
function loadMaterialsFromStorage() {
    return JSON.parse(localStorage.getItem('studyMaterials')) || [];
}