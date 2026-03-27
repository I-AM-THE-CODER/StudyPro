// This file manages browser notifications for upcoming exams and study reminders.

document.addEventListener('DOMContentLoaded', () => {
    // Check for notification permission
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
});

// Function to show a notification
function showNotification(title, body) {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body: body,
            icon: 'assets/icons/notification-icon.png' // Path to an icon for the notification
        });
    }
}

// Function to schedule notifications for upcoming exams
function scheduleExamNotification(exam) {
    const examDate = new Date(exam.date);
    const now = new Date();
    const timeUntilExam = examDate.getTime() - now.getTime();

    // Schedule notification 1 day before the exam
    if (timeUntilExam > 0) {
        setTimeout(() => {
            showNotification(`Upcoming Exam: ${exam.title}`, `Your exam for ${exam.subject} is on ${exam.date}.`);
        }, timeUntilExam - (24 * 60 * 60 * 1000)); // 24 hours in milliseconds
    }
}

// Function to schedule study reminders
function scheduleStudyReminder(subject, reminderTime) {
    const now = new Date();
    const reminderDate = new Date(reminderTime);

    const timeUntilReminder = reminderDate.getTime() - now.getTime();

    if (timeUntilReminder > 0) {
        setTimeout(() => {
            showNotification(`Study Reminder for ${subject}`, `It's time to study for ${subject}!`);
        }, timeUntilReminder);
    }
}