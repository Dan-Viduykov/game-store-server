import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { GameService } from './game.service';

@Controller('/games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  create(@Body() dto: CreateGameDto) {
    return this.gameService.create(dto);
  }

  @Get()
  getAll() {
    return 'work';
  }

  //   @Get()
  //   getOne() {}

  //   @Delete()
  //   delete() {}
}
