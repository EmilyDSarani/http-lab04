
// return the body, method, and path from rawRequest
//the rawReq might need the method and path = to it
// waaait, with the method and the path, this request might also be split 
// rawrequest.split('\r\n\r\n)
//all the splits are happening here
// body will equal the body=firstparserequest[1]

//got help with this, but will need to rexplained-
//n = new line
// r = carriage return

module.exports = rawRequest => {
  const [method, path] = rawRequest.split('\n')[0].split(' '); 
  //this is separating the method and path and spliting it at the newline, then splitting it again at the space. 
  
  const body = rawRequest.split('\r\n\r\n')[1];
  // this is spliting it at the r, n and again at the r and n and grabbing the body with the method and path

  return { method, path, body };
};
