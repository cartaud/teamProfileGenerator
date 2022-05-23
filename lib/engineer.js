const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGitHub() {
        return this.github
    }

    getRole() {
        return Engineer
    }
}