import { UserModel } from '../model/user.model';
import { Body, Controller, Inject, Post } from '@midwayjs/decorator';
import { Context } from '@midwayjs/express';
import { Validate } from '@midwayjs/validate';
import { UserLoginDTO } from '../dto/user.dto';
import { JwtService } from '@midwayjs/jwt';

@Controller('/api')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userRep: UserModel;

  @Inject()
  jwtService: JwtService;

  @Post('/user/login')
  @Validate()
  async home(@Body() user: UserLoginDTO) {
    await this.userRep.insertUser();
    const result = await this.userRep.getUserByUsernameAndPassword(
      user.username,
      user.password
    );

    if (result) {
      const token = await this.jwtService.sign({ ...result }, '123456', {
        algorithm: 'HS256',
        expiresIn: '2d',
      });
      return {
        code: 200,
        result: 'success',
        message: '登录成功',
        data: {
          token,
        },
      };
    } else {
      return {
        code: 400,
        result: 'error',
        message: '账号或密码不正确',
        data: null,
      };
    }
  }
}
