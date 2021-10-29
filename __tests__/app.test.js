const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  //it worked for one, so hypothetically, it should work for all
  it('should get back the /hi route with GET', async() => {
    const response = await request (app).get('/hi');
    expect(response.text).toEqual('hi');
  });
  it('should get back the /hi route with GET', async() => {
    const response = await request (app).get('/red');
    expect(response.text).toEqual('<h1> Red </h1>');
  });
  it('should get back the /hi route with GET', async() => {
    const response = await request (app).get('/blue');
    expect(response.text).toEqual('<h1> Blue </h1>');
  });
  it('should get back the /hi route with GET', async() => {
    const response = await request (app).get('/green');
    expect(response.text).toEqual('<h1> Green </h1>');
  });
});
