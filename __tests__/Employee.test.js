const Employee = require("../lib/Employee.js")

test('set name', () => {
    const name = 'Karen';
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
});

test('set id', () => {
    const id = 45;
    // test values
    const employee = new Employee('Karen', id);

    expect(employee.id).toBe(id);
});

test('set email', () => {
    const email = 'karen@gmail.com';
    // entering test placeholder values for testing
    const employee = new Employee('Karen', 45, email);
    expect(employee.email).toBe(email);
});

// checking for employee name
test("testing employee name value", () => {
    const name = 'Karen';
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
});

// checking for employee id
test("testing employee id value", () => {
    const id = 45;
    const employee = new Employee('Karen', id);

    expect(employee.getId()).toBe(id);
});

// checking for employee email
test("testing employee email value", () => {
    const email = 'karen@gmail.com';
    const employee = new Employee('Karen', 45, email);

    expect(employee.getEmail()).toBe(email);
});

// checking for employee role
test("testing employee role value", () => {
    const role = 'Employee';
    const employee = new Employee('Karen', 45, 'karen@gmail.com');

    expect(employee.getRole()).toBe(role);
});