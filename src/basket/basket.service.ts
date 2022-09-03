import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Game, GameDocument } from './../game/schemas/game.schema';
import { BasketModule } from './basket.module';
import { Basket } from './basket.schema';

@Injectable()
export class BasketService {
  constructor(
    @InjectModel(Basket.name) private basketModel: Model<BasketModule>,
    @InjectModel(Game.name) private gameModel: Model<GameDocument>,
  ) {}

  async getAll(): Promise<any> {
    const games = await this.basketModel.find();
    return games;
  }

  async addGame(id: ObjectId): Promise<any> {
    const games = await this.basketModel.find();
    const game = await this.gameModel.findById(id);
    console.log(games);
    console.log(game);
  }
}
