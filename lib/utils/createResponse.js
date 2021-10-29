//we are trying to just create the html stuff
//this is the response when something is requested.
//we will need the content length in here, which will take in the body and the length...because the length will just be dependent on the body right now. 
//ESSENTIALLY we are just plugging it in and adding in a \r
//this looks like the test for the parseRequest

module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => { 
  return `HTTP/1.1 ${status}\r
Accept-Ranges: bytes\r
Content-Length: ${body.length}\r
Content-Type: ${contentType}\r
\r
${body}`;
};
