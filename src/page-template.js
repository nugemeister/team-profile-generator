// function to generate the HTML page
const generatePage = team => {
    
    // array for storing team member cards
    const html = [];

    // Manager Function
    const managerCard = manager => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-people-roof"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        </div>
        `;
    };

    // Engineer Function
    const engineerCard = engineer => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-laptop-code"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github Account: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
        </div>
        `;
    };

    // Intern Function
    const internCard = intern => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-graduation-cap"></i> ${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
        </div>
        `;
    };

    // add team member cards to the storing html array
    // for Managers
    html.push(team
        .filter(employee => employee.getRole() === "Manager")

        // assign "Manager" card to the manager team members
        .map(manager => managerCard(manager))
    );

    // for Engineers
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        
        // assign "Engineer" card to the engineer team members
        .map(engineer => engineerCard(engineer))
        // add this to the previous team members
        .join("")
    );

    // for Interns
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        
        // assign "Intern" card to the intern team members
        .map(intern => internCard(intern))
        // add this to the previous team members
        .join("")
    );

    // return all team members as a joined HTML string
    return html.join("");

};

// Export HTML Page Function
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link href="style.css" rel="stylesheet">
    </head>

    <body>
    <div class="container-fluid">    
        <div class="row">
        <div class="col-12 jumbotron mb-3" id="title">
            <h1 class="text-center">Team Profile</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="justify-content-center col-12 d-flex">
                ${generatePage(team)}
            </div>
        </div>
    </div>

    <script src="https://kit.fontawesome.com/b2ac0b6969.js" crossorigin="anonymous"></script>
    
    </body>
    </html>
    `;
};