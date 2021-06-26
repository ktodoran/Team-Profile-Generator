const generateHTML = (teamName, templateData) => {
    const team = teamName;
    const employees = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous">
        <title>${team}'s Dashboard</title>
    </head>

    <body style="background-color: rgba(199,199,191,0.75);">
        <header style="background-color: #000035;">
            <div class="container py-3">
                <h1 style="color: white">Members of ${team}</h1>
            </div>
        </header>
        <main class="container py-5">
            <div class="row">
                ${generateEmployeeCards(employees)}
            </div>
        </main>
  </body>
  </html>
    `;
};

//generate the employee cards
const generateEmployeeCards = (employees) => {
    return `
        ${employees.filter((element) => element.getRole() === "Manager")
        .map(( {name, id, email, officeNumber}) => {
            return `
            <div class="col-3 my-3">
                    <div class="card h-100">
                        <div class="card-header" style="background-color: #a5a2b7;">
                        <h3 style="font-weight: 800;">${name}<span class="badge bg-dark" style="float: right; font-size: 1rem;">ID: ${id}</span></h3>
                        <h4><span><i class="fas fa-user-tie"></i> </span>Manager</h4>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title pb-2" style="text-align: center;">Employee Information</h5>
                            <span class="btn btn-secondary m-1"><i class="fas fa-building"></i> Office No. ${officeNumber}</span><br/>
                            <a href="mailto:${email}" target="_blank" class="btn btn-secondary m-1"><i class="fas fa-envelope"></i> Email</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('')}

        ${employees.filter((element) => element.getRole() === "Engineer")
        .map(( {name, id, email, github}) => {
            return `
            <div class="col-3 my-3">
                    <div class="card h-100">
                        <div class="card-header" style="background-color: #a5a2b7;">
                        <h3 style="font-weight: 800;">${name}<span class="badge bg-dark" style="float: right; font-size: 1rem;">ID: ${id}</span></h3>
                        <h4><span><i class="fas fa-user-hard-hat"></i> </span>Engineer</h4>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title pb-2" style="text-align: center;">Employee Information</h5>
                            <a href="https://github.com/${github}" target="_blank" class="btn btn-secondary m-1"><i class="fab fa-github"></i> GitHub</a><br/>
                            <a href="mailto:${email}" target="_blank" class="btn btn-secondary m-1"><i class="fas fa-envelope"></i> Email</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('')}

        ${employees.filter((element) => element.getRole() === "Intern")
        .map(( {name, id, email, school}) => {
            return `
            <div class="col-3 my-3">
                    <div class="card h-100">
                        <div class="card-header" style="background-color: #a5a2b7;">
                        <h3 style="font-weight: 800;">${name}<span class="badge bg-dark" style="float: right; font-size: 1rem;">ID: ${id}</span></h3>
                        <h4><span><i class="fas fa-user-graduate"></i> </span>Intern</h4>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title pb-2" style="text-align: center;">Employee Information</h5>
                            <span class="btn btn-secondary m-1"><i class="fas fa-school"></i> ${school}</span><br/>
                            <a href="mailto:${email}" target="_blank" class="btn btn-secondary m-1"><i class="fas fa-envelope"></i> Email</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('')}
    `;
};

module.exports = generateHTML;