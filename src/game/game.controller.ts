import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { GameService } from './game.service';

@Controller('/games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'video', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() dto: CreateGameDto) {
    const { picture, video } = files;
    return this.gameService.create(dto, picture[0], video[0]);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.gameService.getAll(count, offset);
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.gameService.search(query);
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

  // @Put(':id')
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     { name: 'picture', maxCount: 1 },
  //     { name: 'video', maxCount: 1 },
  //   ]),
  // )
  // update(
  //   @UploadedFiles() files,
  //   @Body() dto: UpdateGameDto,
  //   @Param('id') id: ObjectId,
  // ) {
  //   const { picture, video } = files;
  //   return this.gameService.udate(id, dto, picture[0], video[0]);
  // }
}
