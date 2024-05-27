const { v4: uuidv4 } = require('uuid');

class Task {
    constructor(description, deadline) {
        this.id = uuidv4();
        this.description = description;
        this.deadline = deadline;
        this.status = 'To do';
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    update(description, deadline) {
        this.description = description;
        this.deadline = deadline;
        this.updatedAt = new Date();
    }

    updateStatus(status) {
        this.status = status;
        this.updatedAt = new Date();
    }

    validate() {
        if (!this.description || !this.deadline) {
            throw new Error('Description and deadline are required');
        }
        if (!['To do', 'In progress', 'Completed'].includes(this.status)) {
            throw new Error('Invalid status');
        }
    }
}

module.exports = Task;