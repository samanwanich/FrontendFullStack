import { RegisterService } from './register.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Get('student/:sid/:term')
  async student(@Param('sid') sid: string, @Param('term') term: string) {
    return this.registerService.student(sid, term);
  }

  @Get('teacher/:tid/:term')
  async teacher(@Param('tid') tid: string, @Param('term') term: string) {
    return this.registerService.teacher(tid, term);
  }

  @Get('course/:cid/:term/:sec')
  async course(
    @Param('cid') cid: string,
    @Param('term') term: string,
    @Param('sec') sec: string,
  ) {
    return this.registerService.course(cid, term, sec);
  }
}
