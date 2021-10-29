const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

//this is where we will do our other paths.
// /red
// /green
// /blue
//Will need to add in the html with an h1 and the word red, green, blue each. 
//

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
