const http = require("http");

http
  .createServer((request, response) => {


    // Class 1.

    //console.log(request);

    // response.writeHead(200, {
    //     'Content-Type': 'text/plain'
    // });

    // response.writeHead(200, {
    //     'Content-Type': 'application/json'
    // });

    // const person = {
    //     id: 1,
    //     name: 'manuel'
    // }
    // response.write(JSON.stringify(person));

    // response.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // response.writeHead(200, {
    //   "Content-Type": "application/csv",
    // });

    // response.write('id, manuel\n');
    // response.write('id, juan\n');
    // response.write('id, angie\n');
    // response.write('id, maria\n');
    // response.write('id, manchis\n');

    // Class 2.

    response.write("Hello World!");



    response.end();

  })
  .listen(3000);

console.log("Listen on port 3000");
