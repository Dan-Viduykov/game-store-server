import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('/games')
export class GameController {
  //   @Post()
  //   create() {}

  @Get()
  getAll() {
    return 'work';
  }

  //   @Get()
  //   getOne() {}

  //   @Delete()
  //   delete() {}
}
