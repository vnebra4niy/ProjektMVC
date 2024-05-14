const express = require('express')
const bodyParser = require('body-parser')
const TaskController = require('./controllers/TaskController')
const ViewController = require('./controllers/ViewController')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/tasks', ViewController.renderTaskList)

app.get('/tasks/add', ViewController.renderAddTaskForm)

app.get('/tasks/list', ViewController.renderTaskList)

app.get('/tasks/:id/edit', TaskController.renderEditTaskForm)

app.post('/tasks', TaskController.addTask)

app.post('/tasks/add', TaskController.addTask)

app.post('/tasks/:id/delete', TaskController.deleteTask)

app.post('/tasks/:id/complete', TaskController.markTaskCompleted)

app.post('/tasks/:id/edit', TaskController.editTask)

app.use((req, res, next) => {
    res.status(404).render('error', { message: '404 Not Found' });
});

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})