 // task-manager.js
class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
    }

    loadTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask(task) {
        this.tasks.push(task);
        this.saveTasks();
    }

    editTask(index, updatedTask) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index] = updatedTask;
            this.saveTasks();
        }
    }

    deleteTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            this.saveTasks();
        }
    }

    getTasks() {
        return this.tasks;
    }

    clearTasks() {
        this.tasks = [];
        this.saveTasks();
    }
}

// Example usage
const taskManager = new TaskManager();
taskManager.addTask({ title: 'Study JavaScript', completed: false });
taskManager.addTask({ title: 'Prepare for Math Exam', completed: false });