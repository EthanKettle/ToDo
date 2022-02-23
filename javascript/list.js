class List {
    constructor(name) {
        this.name = name;
        this.task = [];
    }
    addTask(text) {
        const newTask = new Task(text);
        this.tasks.push(newtask);
    }
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id != id);
    }
    rename(name) {
        this.name = name;
    }
}