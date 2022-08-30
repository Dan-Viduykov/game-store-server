import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { Game, GameDocument } from './schemas/game.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class GameService {
  constructor(
    @InjectModel(Game.name) private gameModel: Model<GameDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateGameDto): Promise<Game> {
    const game = await this.gameModel.create({ ...dto });
    return game;
  }

  // async getAll() {}
  //   async getOne() {}
  //   async delete() {}
}
