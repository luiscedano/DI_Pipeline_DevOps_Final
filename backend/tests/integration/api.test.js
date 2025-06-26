const request = require('supertest');
const app = require('../../app');

describe('GET /api', () => {
  it('debe responder con JSON y ok=true', async () => {
    const { body, status } = await request(app).get('/api');
    expect(status).toBe(200);
    expect(body.ok).toBe(true);
  });
}); 