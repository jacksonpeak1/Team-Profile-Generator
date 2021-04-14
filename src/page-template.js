const render = (employees) => {
  let template = "";

  employees.forEach((employee) => {
    switch (employee.getRole()) {
      case "Manager":
        template += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div>Name: ${employee.getName()}</div>
                        <div>Id: ${employee.getId()}</div>
                        <div>Email ${employee.getEmail()}</div>
                        <div>Office Number: ${employee.getOfficeNumber()}</div>
                    </div>
                </div>
                `;
        break;
      case "Intern":
        template += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div>Name: ${employee.getName()}</div>
                        <div>Id: ${employee.getId()}</div>
                        <div>Email ${employee.getEmail()}</div>
                        <div>School: ${employee.getSchool()}</div>
                    </div>
                </div>
                `;
        break;
      case "Engineer":
        template += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div>Name: ${employee.getName()}</div>
                        <div>Id: ${employee.getId()}</div>
                        <div>Email ${employee.getEmail()}</div>
                        <div>GitHub: ${employee.getGithub()}</div>
                    </div>
                </div>
                `;
        break;
      default:
        return "it broke";
    }
  });

  const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            ${template}
        </body>
      </html>
  `;
  return html;
};

module.exports = render;
