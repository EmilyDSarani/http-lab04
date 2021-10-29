const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('should get back the /hi route with GET', async() => {
    const response = await request (app).get('/hi');
    expect(response.text).toEqual('hi');
  });
});
