// This file manages localStorage operations for persisting user data, such as exams and study resources.

const storage = {
    // Save data to localStorage
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    // Retrieve data from localStorage
    load(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },

    // Remove data from localStorage
    remove(key) {
        localStorage.removeItem(key);
    },

    // Clear all localStorage data
    clear() {
        localStorage.clear();
    },

    // Check if a key exists in localStorage
    exists(key) {
        return localStorage.getItem(key) !== null;
    }
};