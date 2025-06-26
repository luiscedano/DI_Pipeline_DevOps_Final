const request = require('supertest');
const app = require('../../app');

describe('GET /', () => {
  it('debería responder con "Servidor escuchando"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Servidor escuchando');
  });
}); 