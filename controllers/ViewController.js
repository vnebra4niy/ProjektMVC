const Task = require('../models/Task');
const TaskController = require('./TaskController')

exports.renderTaskList = (req, res) => {
    const tasks = TaskController.getAllTasks()
    res.render('task-list', { tasks })
}

exports.renderAddTaskForm = (req, res) => {
    res.render('add-task')
}