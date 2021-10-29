const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

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
    const request = parseRequest(data.toString());
    const [method, path] = parseRequest[0].split(' ');
    
    //using the echo path to get the request body
    if(method === 'POST' && path === '/echo'){
      socket.write(`HTTP/1.1 200 OK\r
  Content-Type: text/plain\r
  \r
  ${request.body}
  `);
    } else if(method === 'GET' && path === '/hi'){
      socket.write( 
        createResponse({ status: '200 OK', body: 'hi', contentType: 'text/html' })
      );  
    } else if(method === 'GET' && path === '/red'){
      socket.write(`HTTP/1.1 200 OK\r
Content-Type: text/html\r
\r
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <h1> Red </h1>
</head> 
</html>`);
    }
    else if(method === 'GET' && path === '/blue'){
      socket.write(`HTTP/1.1 200 OK\r
Content-Type: text/html\r
\r
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <h1> Blue </h1>
</head>
</html>`);
    } else if(method === 'GET' && path === '/green'){
      socket.write(`HTTP/1.1 200 OK\r
Content-Type: text/html\r
\r
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <h1> Green </h1>
</head>
</html>`);
    }
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
