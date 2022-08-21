// Employee Class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // return the employee's name
    getName() {
        return this.name;
    }

    // return the employee's id
    getId() {
        return this.id;
    }

    // return the employee's email
    getEmail(){
        return this.email;
    }

    // return the employee's role
    getRole(){
        return 'Employee';
    }
};

module.exports = Employee;