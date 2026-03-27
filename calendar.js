// This file manages the calendar functionality, including displaying and updating exam dates.

document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar-container');
    const examList = JSON.parse(localStorage.getItem('exams')) || [];

    function renderCalendar() {
        const currentDate = new Date();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const calendarDays = [];
        for (let i = 1; i <= daysInMonth; i++) {
            const day = new Date(year, month, i);
            const dayExams = examList.filter(exam => new Date(exam.date).toDateString() === day.toDateString());
            calendarDays.push({
                date: day,
                exams: dayExams
            });
        }
        displayCalendar(calendarDays, firstDay.getDay(), daysInMonth, month, year);
    }

    function displayCalendar(days, firstDayOfWeek, daysInMonth, month, year) {
        calendarContainer.innerHTML = '';

        // Header with month and year
        const header = document.createElement('div');
        header.className = 'calendar-header';
        header.innerHTML = `<h2>${currentMonthName(month)} ${year}</h2>`;
        calendarContainer.appendChild(header);

        // Days of week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const grid = document.createElement('div');
        grid.className = 'calendar-grid';
        daysOfWeek.forEach(dayName => {
            const dow = document.createElement('div');
            dow.className = 'calendar-day calendar-dow';
            dow.innerHTML = `<strong>${dayName}</strong>`;
            grid.appendChild(dow);
        });

        // Empty cells for days before the 1st
        for (let i = 0; i < firstDayOfWeek; i++) {
            const empty = document.createElement('div');
            empty.className = 'calendar-day empty';
            grid.appendChild(empty);
        }

        // Calendar days
        days.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.innerHTML = `<span>${day.date.getDate()}</span>`;
            if (day.exams.length > 0) {
                dayElement.classList.add('has-exams');
                dayElement.innerHTML += `<div class="exam-list">${day.exams.map(exam => `<div>${exam.title}</div>`).join('')}</div>`;
            }
            grid.appendChild(dayElement);
        });

        calendarContainer.appendChild(grid);
    }

    function currentMonthName(monthIdx) {
        return [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ][monthIdx];
    }

    function addExam(exam) {
        examList.push(exam);
        localStorage.setItem('exams', JSON.stringify(examList));
        renderCalendar();
    }

    // Example of adding an exam (this would be replaced with actual form submission logic)
    addExam({ title: 'Math Exam', date: '2023-10-15' });
    addExam({ title: 'Science Exam', date: '2023-10-20' });

    renderCalendar();
});