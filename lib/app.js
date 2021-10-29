const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

//this will be our "hi" plain text response. 
//the goal is to have it return "hi" with a get.
// create a server--actually, this might be created in app.js
//use the connectedClient.write to create the response

//this is where we will do our other paths.
// /red
// /green
// /blue
//Will need to add in the html with an h1 and the word red, green, blue each. 
//to get the different colors and h1, might need to do the else if thing

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
