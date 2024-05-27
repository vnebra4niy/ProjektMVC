const Task = require('../models/Task');

let tasks = [];

exports.addTask = (req, res) => {
    try {
        const { description, deadline } = req.body;
        const newTask = new Task(description, deadline);
        newTask.validate();
        tasks.push(newTask);
        res.redirect('/tasks/list');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);

    if (tasks.length === initialLength) {
        return res.status(404).send('Task not found');
    }

    res.redirect('/tasks/list');
};

exports.editTask = (req, res) => {
    try {
        const { id } = req.params;
        const { description, deadline } = req.body;
        const task = tasks.find(task => task.id === id);

        if (!task) {
            return res.status(404).send('Task not found');
        }

        task.update(description, deadline);
        task.validate();
        res.redirect('/tasks/list');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateTaskStatus = (req, res) => {
    const { id, status } = req.params;
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).send('Task not found');
    }

    try {
        task.updateStatus(status);
        task.validate();
        res.redirect('/tasks/list');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.renderEditTaskForm = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).send('Task not found');
    }

    res.render('edit-task', { task });
};

exports.getAllTasks = () => {
    return tasks;
};