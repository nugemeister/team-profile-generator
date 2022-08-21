// Intern Class

// require employee data
const Employee = require('../lib/Employee')

// adding Intern data to existing employee data
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    // return the intern's school
    getSchool() {
        return this.school;
    }

    // return the intern's role
    getRole(){
        return 'Intern';
    }
};

module.exports = Intern;