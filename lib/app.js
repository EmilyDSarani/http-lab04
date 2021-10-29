//the point of this lab is to see how the /GET and /POST works when they are used as paths. This is essentially the under the hood of those pathings.

const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const path = require('path');

//this will be our "hi" plain text response. 
//the goal is to have it return "hi" with a get.
// create a server--actually, this might be created in app.js
//use the socket.write to create the response

//this is where we will do our other paths.
// /red
// /green
// /blue
//Will need to add in the html with an h1 and the word red, green, blue each. 
//to get the different colors and h1, might need to do the else if thing

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request  = parseRequest(data.toString());

    //by deconstructoring it this way, I can now grab the path, method, and body
    const { path, method, body } = request;
    
    //using the echo path to get the request body
    if(method === 'POST' && path === '/echo'){
      socket.write(`HTTP/1.1 200 OK\r
  Content-Type: text/plain\r
  \r
  ${body}
  `);
    } else if(method === 'GET' && path === '/hi'){
      socket.write( 
        createResponse({ status: '200 OK', body: 'hi', contentType: 'text/html' })
      );  
    } else if(method === 'GET' && path === '/red'){
      socket.write( 
        createResponse({ status: '200 OK', body: '<h1> Red </h1>', contentType: 'text/html' })
      );  
    } else if(method === 'GET' && path === '/blue'){
      socket.write( 
        createResponse({ status: '200 OK', body: '<h1> Blue </h1>', contentType: 'text/html' })
      );  
    } else if(method === 'GET' && path === '/green'){
      socket.write( 
        createResponse({ status: '200 OK', body: '<h1> Green </h1>', contentType: 'text/html' })
      );  
    }
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
