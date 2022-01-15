const createManager = function (manager) {
    return `<div class="card border-0 col-sm-12 col-md-6 col-lg-4">
    <div class="card-header bg-info">
        <h2>${manager.getName()}</h2>
        <h3><span class="fas fa-mug-hot"></span> ${manager.getRole()}</h3>
    </div>
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>`
}

const createEngineer = function (engineer) {
    return `<div class="card border-0 col-sm-12 col-md-6 col-lg-4">
    <div class="card-header bg-info">
        <h2>${engineer.getName()}</h2>
        <h3><span class="fas fa-glasses"></span> ${engineer.getRole()}</h3>
    </div>
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
    </ul>
</div>`
}

const createIntern = function (intern) {
    return `<div class="card border-0 col-sm-12 col-md-6 col-lg-4">
    <div class="card-header bg-info">
        <h2>${intern.getName()}</h2>
        <h3><span class="fas fa-user-graduate"></span> ${intern.getRole()}</h3>
    </div>
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>`
}

const generateHTML = function (workerArray) {
    let body = ``
    workerArray.forEach(addBodyText);

    function addBodyText(item) {
        body += item;
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link href="../dist/style.css" rel="stylesheet">
    </head>
    <body>
        <heading>
            <h1 class="text-center mb-5 p-3 bg-info">Coding Team Profile</h1>
        </heading>
    
        <div class="container">
            <div class="row gy-5">
                ${body}
            </div>
        </div>
    </body>
    </html>`
}
module.exports = { createManager, createEngineer, createIntern, generateHTML };