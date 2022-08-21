# Team Profile Generator

## Project Explained
The purpose of this project is to create a a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
<br></br>
## Success Criteria

### User Stories
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

```
### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

```

## Installation

1. Clone down the repository onto your local machine using the `git clone` command.
2. Run `npm install` to install necessary packages and dependencies.
3. Enter the command `node index.js` to initialize the application, proceed by answering the following prompts.
4. The resulting Team Profile HTML Page will be placed into the `dist/` folder for reference.

<br></br>

## Tests
Enter the command `npm run test` to run the associated tests.

<br></br>
## Video Demo

The following video shows the web application's appearance and functionality:

![This is a recording of the live webpage.](./images/mockup.png)
<br></br>

## Provided Mock-Up for Reference

The following image was provided as a directional mock-up for reference.

![This is a screenshot of the provided mock-up image for reference.](./images/mockup.png)
<br></br>

