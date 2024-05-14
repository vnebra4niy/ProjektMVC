class Task {
    constructor(description, deadline) {
        this.id = Date.now().toString()
        this.description = description
        this.deadline = deadline
        this.completed = false
    }
}

module.exports = Task