// exam-manager.js

// Function to add a new exam
function addExam(title, subject, date, description) {
    const exams = getExams();
    const newExam = {
        id: Date.now(),
        title,
        subject,
        date,
        description
    };
    exams.push(newExam);
    saveExams(exams);
}

// Function to edit an existing exam
function editExam(id, updatedExam) {
    const exams = getExams();
    const examIndex = exams.findIndex(exam => exam.id === id);
    if (examIndex !== -1) {
        exams[examIndex] = { ...exams[examIndex], ...updatedExam };
        saveExams(exams);
    }
}

// Function to delete an exam
function deleteExam(id) {
    const exams = getExams();
    const updatedExams = exams.filter(exam => exam.id !== id);
    saveExams(updatedExams);
}

// Function to get all exams from localStorage
function getExams() {
    const exams = JSON.parse(localStorage.getItem('exams')) || [];
    return exams;
}

// Function to save exams to localStorage
function saveExams(exams) {
    localStorage.setItem('exams', JSON.stringify(exams));
}

// Function to get exams by subject
function getExamsBySubject(subject) {
    const exams = getExams();
    return exams.filter(exam => exam.subject === subject);
}