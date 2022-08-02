import { UserEntity } from '../entity/user.entity';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Provide } from '@midwayjs/decorator';

@Provide('UserModel')
export class UserModel {
  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  async insertUser() {
    const user = new UserEntity();
    user.id = 1;
    user.username = 'jack';
    user.password = 'redballoon';
    await this.userRepo.save(user);
  }

  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  async getUserByUsernameAndPassword(username, password): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: {
        username,
        password,
      },
    });

    return user;
  }
}
