
// return the body, method, and path from rawRequest
//the rawReq might need the method and path = to it
// waaait, with the method and the path, this request might also be split 
// rawrequest.split('\r\n\r\n)
//all the splits are happening here
// body will equal the body=firstparserequest[1]

//got help with this, but will need to rexplained-

module.exports = rawRequest => {
  const parseReqOne = rawRequest.split('\r\n\r\n'); //reading that every time there is a \r\n then do a split... when I do ('\r\n') the first test works. BUT when i do ('\r\n\r\n') they both work
  const [method, path] = parseReqOne[0].split(' '); //putting the space will split on every space, it adds to the array
  const body = parseReqOne[1];


  return { method, path, body };
};
