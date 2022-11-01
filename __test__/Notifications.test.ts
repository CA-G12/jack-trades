import request from "supertest";
import sequelize from "../server/database/connection";
import app from "../server/app";
import buildTables from "../server/database/build";
const token = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJNYXhpbUBnbWFpbC5jb20iLCJpYXQiOjE2NjczMjc3NDB9.faggFtOeq-So8GLloeENRFNhkLMEHx6lFHqiSpNmh7I'
const token2 = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJKb2huQGdtYWlsLmNvbSIsImlhdCI6MTY2NzMyODE1NX0.xpeTI81GnP_nuh-JwRZcxoaJUQJDBaGjnE4OSVBvTWI;'
beforeAll(() => buildTables());
describe("Get Notifications route must be returned all notifications for certain user ",  () => {
   
    it("should return 200 when the user made a success request", async () => {
        await request(app)
            .post("/api/v1/requests/")
            .send({
                "productId": 4,
                "products":[7],
            })
            .set('Cookie', token)
            .expect(200)
            .expect("Content-Type", /json/)
            .expect({
                 message: 'Your request made successfully' 
            });
    });
   
    test('should return all notification ',async () => {
      await  request(app)
        .get('/api/v1/notifications')
        .set('Cookie', token2)
        .expect(200)
        .expect((res) => {
          res.body =   {
                message: [
                  {
                    id: 1,
                    status: 'pending',
                    is_exchangable: true,
                    sender_approval: null,
                    receiver_approval: null,
                    products: [Array],
                    createdAt: '2022-11-01T18:43:10.263Z',
                    updatedAt: '2022-11-01T18:43:10.263Z',
                    deletedAt: null,
                    sender_id: 3,
                    receiver_id: 1,
                    product_id: 4,
                    exchanged_id: null
                  }
                ]
              }
        });
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
