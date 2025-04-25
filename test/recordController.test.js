const request = require('supertest');
const app = require('../src/app');
const { sequelize } = require('../src/config/database');
const Record = require('../src/models/Record');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('POST /api/records', () => {
  it('should create records', async () => {
    const response = await request(app)
      .post('/api/records')
      .send([{ name: 'Test1', value: 100 }, { name: 'Test2', value: 200 }])
      .expect(201);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty('name', 'Test1');
  });

  it('should return 400 for invalid data', async () => {
    await request(app)
      .post('/api/records')
      .send([{ name: '', value: 'invalid' }])
      .expect(400);
  });

  it('should return 400 for empty array', async () => {
    await request(app)
      .post('/api/records')
      .send([])
      .expect(400);
  });
});

describe('GET /api/records', () => {
  beforeEach(async () => {
    await Record.destroy({ where: {} }); // Clear records before each GET test
  });

  it('should retrieve all records', async () => {
    await Record.bulkCreate([{ name: 'Test3', value: 300 }]);
    const response = await request(app)
      .get('/api/records')
      .expect(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty('name', 'Test3');
  });
});