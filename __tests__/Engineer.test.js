const Engineer = require('../lib/Engineer.js');

test('testing for Github username function returning value', () => {
    const github = 'githubbob';
    // test values for Engineer fields (name, id, email, github)
    const engineer = new Engineer('Bob', 400, 'bob@gmail.com', github);

    expect(engineer.github).toBe(github);
});

// checking for engineer github account
test("testing for github account", () => {
    const github = 'githubbob'
    const engineer = new Engineer('Bob', 400, 'bob@gmail.com', github);

    expect(engineer.getGithub()).toBe(github);
});

// checking for engineer role role assignment
test("testing for engineer's role assignment", () => {
    const role = 'Engineer';
    const engineer = new Engineer('Bob', 400, 'bob@gmail.com', 'githubbob');

    expect(engineer.getRole()).toBe(role);
});