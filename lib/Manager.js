// Manager Class

// require employee data
const Employee = require('../lib/Employee')

// adding Engineer data to existing employee data
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // return the manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // return the manager's role
    getRole(){
        return 'Manager';
    }
};

module.exports = Manager;