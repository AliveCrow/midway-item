import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/express';

describe('test/controller/user.test.ts', () => {
  it('should POST /api/user/login', async () => {
    function runners(code) {
      if(code === 200) {
        expect(result.body).toEqual({
          code: expect.any(Number),
          result: expect.any(String),
          message: expect.any(String),
          data: {
            token: expect.any(String),
          }
        })
      } else if(code === 400) {
        expect(result.body).toEqual({
          code: expect.any(Number),
          result: expect.any(String),
          message: expect.any(String),
          data: null
        })
      }
    }
    // create app
    const app = await createApp<Framework>();
    // make request
    const start = new Date();
    const result = await createHttpRequest(app)
      .post('/api/user/login')
      .send({
        "username": "jack111",
        "password": "redballoon"
      })

    // @ts-ignore
    expect(new Date() - start).toBeLessThan(1000);
    // use expect by jest
    runners(result.body.code)

    await close(app);
  });
});
