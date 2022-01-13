# Team Profile Generator

[![License Badge](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

## Description

The team profile generator application was designed for users to create a webpage containing their work team roster by simply filling out user prompts. This application is run in the node.js environment, and it contains prompts asking for information about each team member. The team profile generator allows the user to create individual team member profiles for various team roles. As a user you can create profiles for the manager, engineers, and interns. If you are in need of any easy to use application that does all of the hard work of generating a team profile webpage, then the team profile generator is the application for you.  

## Table of Contents
  * [Built With](#built-with)
  * [Code Access](#code-access)
  * [Preview](#preview)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  * [Credits](#credits)

## Built With

The Team Profile generator application was built with:
- JavaScript
- Node.js
- File System
- npm
- Inquirer
- Jest
- Bootstrap
- Font Awesome

## Code Access

If you would like to access the code for this application, please visit [GitHub](https://github.com/sm3131/team-profile-generator)

## Preview

Click on the link below to watch the Screencastify video that walks the user through proper usage of the application:


Example Team Profile WebPage created by this application:
![team-profile](./utils/images/)

## Installation
To install the Team Profile Generator application complete the following steps:
1. Clone the application's code from this [GitHub](https://github.com/sm3131/team-profile-generator) repository onto your local machine into a new directory (e.g. team-profile-generator).
2. Open the command line and navigate to the directory you cloned this repository into, then open the content in a code text editor. You should now see the main files and folders for this project (index.js, generateHTML.js, /lib, /dist, __tests__).
3. Next check to see if you have node.js installed on your machine by running the command *node -v* in your command line.
4. If you have node.js make sure your version is up to date by going to this website (https://nodejs.org/en/).
5. If you do not have node.js installed follow the installation steps on this website (https://nodejs.org/en/).
6. Once you have node.js installed, make sure you are still in the team profile generator directory in the command line, and then run the following command *npm install* to install the required packages and dependencies to run the application.
7. After you have node.js and the required npm dependencies installed, you are ready to run the application via node.js using the command line.

## Usage
To use the team profile generator application complete the following steps:
1. The purpose of this application is to generate a team profile webpage based on user input, so if you need of a nicely formatted team roster for your company this is the application for you. 
2. After you have completed all of the above installation steps, you can now either test the application to see how it works and what the prompts ask, or you can jump right into creating your team profile.
3. To begin running the application in the command line, type *node index.js* and this will start the program.
4. If the program is running properly you should be confronted with some initial intro text and the first user prompt asking if you would like to start creating your team profile.
5. The application will then ask for you to start by entering the team manager's information (i.e. confirm role, name, id, email, office number) 
6. After completing the manager prompts, the app will ask if you would like to add another team member (i.e. engineer or intern), or if you would like to finish building your team
7. If you select engineer or intern, you will be confronted with more user prompts asking about that team member's information (i.e. confirm role, name, id, email, github, school), then you will again be asked if you would like to add another team member or finish building the team profile
8. If you select finish building team then this will collect all of your user input and create the appropriate html and css to generate your team profile webpage. You should see a message that reads, "Team Profile WebPage Created!", after seeing this message you can return to your code editor and you will see a new file has been created titled, "new_index.html". If you open this file in your browser you will see the finalized team profile that has been generated.

**IMPORTANT NOTE:** Each time you run the program and fill out the user prompts for your team members, you will overwrite the existing new_index.html file if one currently exists. Filling out the user prompts multiple times will not create multiple new_index.html files instead it will overwrite the existing new_index.html file. It is recommended that you copy and save the new_index.html file you created before generating a new one, that way you will not lose your current team profile webpage. 

## Tests

Several tests were created for this application in order to ensure the worker classes were created properly. The tests ensure that each worker property and method function properly and return the intended information. If you would like to run the test suites for this application, follow these steps:
1. Double check your package.json file to ensure the Jest package has been installed as a dev dependency
2. Also check the json file to see that Jest is listed as the test value in the scripts object
3. If Jest is not installed run *npm install*
4. Once you have installed Jest, if you would like to see what the tests entail you can view each test in the __tests__ folder, each file is named after the class file it is testing
5. Then when you are ready to run your tests, visit the command line again and make sure you are still in this application's directory
6. To run the tests enter the command *npm test*, and you should see that all test suites and tests have passed for the application

## License

MIT License

Copyright (c) 2022 Sammi Moore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

If you would like to access this project's repository as well as other projects in my GitHub, click this [GitHub](https://github.com/sm3131) link. 

For all other questions or inquires please feel free to contact me via email at [sm2683@nau.edu](mailto:sm2683@nau.edu)

## Credits

All of the code and tests for this project were written by myself, Sammi Moore. I wrote the tests for each of the classes used in this application, I wrote the code that is run in the node.js environment, and I wrote the code required to generate the html and css for the finalized team profile webpage. 

The resources that I used for this project are as follows:
- Icons for each of the employee cards were from Font Awesome (Font Awesome by Dave Gandy - http://fontawesome.io)
- Bootstrap styling for the webpage design and format was created using (https://getbootstrap.com/docs/)
- The inquirer package from npm in this node.js application in order to generate user prompt questions (https://www.npmjs.com/package/inquirer)
- The Jest package from npm to run tests for my code in node.js (https://www.npmjs.com/package/jest)
- https://opensource.org/licenses/ (To borrow the license section text describing the terms of each of the licenses included in the readme generator)
- https://shields.io/ (To generate the link to create the license badge)

For the license badges and license section of the readme, I used the following resources:
- https://choosealicense.com/ (To help with picking which licenses to include)
- https://shields.io/ (To generate the link to create the license badge)
- https://wisehackermonkey.github.io/badge-demo/ (To help with coloring the license badges and grabbing the license links)
- https://opensource.org/licenses/ (To borrow the license section text describing the terms of each of the licenses included in the readme generator)