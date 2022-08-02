import { Controller, Get } from '@midwayjs/decorator';

@Controller('/')
export class HelloController {
  @Get('/')
  async getHello() {
    return 'Hello';
  }
}
