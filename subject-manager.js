// subject-manager.js

// Function to create a new subject page
function createSubjectPage(subject) {
    const subjectPage = document.createElement('div');
    subjectPage.className = 'subject-page';
    subjectPage.innerHTML = `
        <h1>${subject.title}</h1>
        <div class="subject-dashboard">
            <h2>Exams</h2>
            <div class="exams-list" id="exams-${subject.id}"></div>
            <h2>Study Materials</h2>
            <div class="materials-list" id="materials-${subject.id}"></div>
            <h2>Study Resources</h2>
            <div class="resources-list" id="resources-${subject.id}"></div>
            <h2>Tasks</h2>
            <div class="tasks-list" id="tasks-${subject.id}"></div>
            <h2>Progress</h2>
            <div class="progress-chart" id="progress-${subject.id}"></div>
        </div>
    `;
    document.body.appendChild(subjectPage);
}

// Function to load subjects from localStorage
function loadSubjects() {
    const subjects = JSON.parse(localStorage.getItem('subjects')) || [];
    subjects.forEach(subject => {
        createSubjectPage(subject);
    });
}

// Function to add a new subject
function addSubject(subject) {
    const subjects = JSON.parse(localStorage.getItem('subjects')) || [];
    subjects.push(subject);
    localStorage.setItem('subjects', JSON.stringify(subjects));
    createSubjectPage(subject);
}

// Function to delete a subject
function deleteSubject(subjectId) {
    let subjects = JSON.parse(localStorage.getItem('subjects')) || [];
    subjects = subjects.filter(subject => subject.id !== subjectId);
    localStorage.setItem('subjects', JSON.stringify(subjects));
    document.getElementById(`subject-${subjectId}`).remove();
}

// Initialize subject manager
document.addEventListener('DOMContentLoaded', function() {
    loadSubjects();

    // Add Exam button
    const addExamBtn = document.getElementById('add-exam-btn');
    if (addExamBtn) {
        addExamBtn.addEventListener('click', function() {
            alert('Add Exam button clicked! Implement exam form/modal here.');
            // TODO: Open exam form/modal for adding an exam
        });
    }

    // Upload Material button
    const uploadMaterialBtn = document.getElementById('upload-material-btn');
    if (uploadMaterialBtn) {
        uploadMaterialBtn.addEventListener('click', function() {
            alert('Upload Material button clicked! Implement upload logic here.');
            // TODO: Open file picker or upload modal
        });
    }

    // Add Study Resource button
    const addResourceBtn = document.getElementById('add-resource-btn');
    if (addResourceBtn) {
        addResourceBtn.addEventListener('click', function() {
            alert('Add Study Resource button clicked! Implement resource form/modal here.');
            // TODO: Open resource form/modal for adding a study resource
        });
    }
});
