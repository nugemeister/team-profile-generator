const Manager = require('../lib/Manager.js');

test('setting office number', () => {
    const officeNumber = 22;
    const manager = new Manager('Allen', 35, 'allen@gmail.com', officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
});

// checking for function returning manager office number
test("getting manager's office number", () => {
    const officeNumber = 22;
    const manager = new Manager('Allen', 35, 'allen@gmail.com', officeNumber);

    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

// checking for manager's role assignment
test("getting manager's role", () => {
    const role = 'Manager';
    const manager = new Manager('Allen', 1, 'allen@gmail.com', 35);

    expect(manager.getRole()).toBe(role);
});