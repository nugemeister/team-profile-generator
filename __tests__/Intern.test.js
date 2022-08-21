const Intern = require('../lib/Intern.js');

test('setting intern school', () => {
    const school = 'School for Hardknocks';
    // test values for intern name, id, and email
    const intern = new Intern('Suzy', 900, 'suzy@gmail.com', school);

    expect(intern.school).toBe(school);
});

// checking for function returning intern school
test("getting intern's school", () => {
    const school = 'School for Hardknocks';
    const intern = new Intern('Suzy', 900, 'suzy@gmail.com', school);

    expect(intern.getSchool()).toBe(school);
});

// checking for intern role assignment
test("getting intern's role assignment", () => {
    const role = 'Intern'
    const intern = new Intern('Suzy', 900, 'suzy@gmail.com', 'School for Hardknocks');

    expect(intern.getRole()).toBe(role);
});