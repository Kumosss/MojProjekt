const request = require("supertest");
const app = require('../app');

describe('Test the root path', () => {
    test('Powinno zwrocic metode GET', async () => {
        try {
            const resp = await request(app).get('/')
            expect(resp.statusCode).toBe(200)
        } catch(e) {
            throw e
        }
    });
});