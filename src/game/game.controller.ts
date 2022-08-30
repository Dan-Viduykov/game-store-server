import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
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
    return this.gameService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.gameService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.gameService.delete(id);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.gameService.addComment(dto);
  }
}
