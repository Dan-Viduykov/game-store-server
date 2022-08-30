import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { Game, GameSchema } from './schemas/game.schema';
import { GameService } from './game.service';
import { FileService } from './file/file.service';
import { GameController } from './game.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [GameController],
  providers: [GameService, FileService],
})
export class GameModule {}
