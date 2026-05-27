const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return 200 with message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello from CI/CD pipeline!');
  });
});

describe('GET /health', () => {
  it('should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});

describe('POST /data', () => {
  it('should return 400 if name missing', async () => {
    const res = await request(app).post('/data').send({});
    expect(res.statusCode).toBe(400);
  });

  it('should return 201 with received data', async () => {
    const res = await request(app).post('/data').send({ name: 'DevOps' });
    expect(res.statusCode).toBe(201);
    expect(res.body.received).toBe('DevOps');
  });
});