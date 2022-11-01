import request from "supertest";
import sequelize from "../server/database/connection";
import app from "../server/app";
import buildTables from "../server/database/build";
const token = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJKZW5uaWVAZ21haWwuY29tIiwiaWF0IjoxNjY2Nzg5MDg4fQ.ayqLDkuNwgfbQZGd5spE1F0KbfxuAa_wPpkt34AKHN4'

beforeAll(() => buildTables());
describe("Get Notifications route must be returned all notifications for certain user ",  () => {
    test('should return all notification ',async () => {
        request(app)
        .get('/api/v1/notifications')
        .set('Cookie', token)
        .expect(200)
        .expect({
                "message": [
                    {
                        "id": 1,
                        "status": "pending",
                        "is_exchangable": true,
                        "sender_approval": null,
                        "receiver_approval": null,
                        "products": [
                            7
                        ],
                        "createdAt": "2022-11-01T12:07:49.436Z",
                        "updatedAt": "2022-11-01T12:07:49.436Z",
                        "deletedAt": null,
                        "sender_id": 3,
                        "receiver_id": 1,
                        "product_id": 4,
                        "exchanged_id": null
                    }
                ]
            }
          );
    });

    test('should return 401 and Unauthorized message for unauthorize user ', async () => {
        await request(app)
        .get('/api/v1/notifications')
          .expect(401)
          .set('Cookie', `${token}sssssss`)
          .expect({
            message: 'Unauthorized'
          });
});});
afterAll(() => sequelize.close());
