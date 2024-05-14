const Task = require('../models/Task')

let tasks = []

exports.addTask = (req, res) => {
    const { description, deadline } = req.body
    const newTask = new Task(description, deadline)
    tasks.push(newTask)
    res.redirect('/tasks/list')
}

exports.deleteTask = (req, res) => {
    const { id } = req.params
    tasks = tasks.filter(task => task.id !== id)
    res.render('task-list', { tasks })
}

exports.editTask = (req, res) => {
    const { id } = req.params
    const { description, deadline } = req.body
    const taskIndex = tasks.findIndex(task => task.id === id)
    if (taskIndex === -1) {
        res.status(404).send('Task not found')
    } else {
        tasks[taskIndex].description = description
        tasks[taskIndex].deadline = deadline
        res.redirect('/tasks/list')
    }
}

exports.markTaskCompleted = (req, res) => {
    const { id } = req.params
    tasks.forEach(task => {
        if (task.id === id) {
            task.completed = true
        }
    })
    res.redirect('/tasks/list')
}

exports.renderEditTaskForm = (req, res) => {
    const { id } = req.params
    const task = tasks.find(task => task.id === id)
    if (!task) {
        res.status(404).send('Task not found')
    } else {
        res.render('edit-task', { task })
    }
}

exports.getAllTasks = () => {
    return tasks
}