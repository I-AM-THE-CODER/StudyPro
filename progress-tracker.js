// This file contains functions to track user progress and generate visual analytics for the Exam & Study Tracker application.

class ProgressTracker {
    constructor() {
        this.studySessions = JSON.parse(localStorage.getItem('studySessions')) || [];
    }

    addSession(subject, duration) {
        const session = {
            subject: subject,
            duration: duration,
            date: new Date().toISOString()
        };
        this.studySessions.push(session);
        this.saveSessions();
    }

    saveSessions() {
        localStorage.setItem('studySessions', JSON.stringify(this.studySessions));
    }

    getTotalStudyTime() {
        return this.studySessions.reduce((total, session) => total + session.duration, 0);
    }

    getSessionsBySubject(subject) {
        return this.studySessions.filter(session => session.subject === subject);
    }

    generateProgressChart(subject) {
        const sessions = this.getSessionsBySubject(subject);
        const totalDuration = sessions.reduce((total, session) => total + session.duration, 0);
        const chartData = sessions.map(session => ({
            date: new Date(session.date).toLocaleDateString(),
            duration: session.duration
        }));

        // Here you would implement the logic to create a visual chart using a library like Chart.js
        // For example:
        // const ctx = document.getElementById('progressChart').getContext('2d');
        // new Chart(ctx, {
        //     type: 'line',
        //     data: {
        //         labels: chartData.map(data => data.date),
        //         datasets: [{
        //             label: 'Study Duration',
        //             data: chartData.map(data => data.duration),
        //             borderColor: 'rgba(75, 192, 192, 1)',
        //             fill: false
        //         }]
        //     }
        // });
    }
}

// Example usage
const progressTracker = new ProgressTracker();
progressTracker.addSession('Math', 120); // Add a 120-minute study session for Math
console.log(`Total study time: ${progressTracker.getTotalStudyTime()} minutes`);