// Engineer Class

// require employee data
const Employee = require('../lib/Employee')

// adding Engineer data to existing employee data
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    // return the engineers's github
    getGithub() {
        return this.github;
    }

    // return the engineer's role
    getRole(){
        return 'Engineer';
    }
};

module.exports = Engineer;