import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Game, GameDocument } from './schemas/game.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class GameService {
  constructor(
    @InjectModel(Game.name) private gameModel: Model<GameDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {}

  async create(dto: CreateGameDto, picture, video): Promise<Game> {
    const videoPath = this.fileService.createFile(FileType.VIDEO, video);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);

    const game = await this.gameModel.create({
      ...dto,
      picture: picturePath,
      video: videoPath,
    });

    return game;
  }

  async getAll(count = 8, offset = 0): Promise<Game[]> {
    const games = await this.gameModel.find().skip(offset).limit(count);
    return games;
  }

  async search(query: string): Promise<Game[]> {
    const games = await this.gameModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
    return games;
  }

  async getOne(id: ObjectId): Promise<Game> {
    const game = await (await this.gameModel.findById(id)).populate('comments');
    return game;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const game = await this.gameModel.findByIdAndDelete(id);
    return game._id;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const game = await this.gameModel.findById(dto.gameId);
    const comment = await this.commentModel.create({ ...dto });
    game.comments.push(comment._id);
    await game.save();
    return comment;
  }
}
