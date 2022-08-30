import { Game } from './../game/schemas/game.schema';
import { BasketModule } from './basket.module';
import { Basket } from './basket.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BasketService {
  constructor(
    @InjectModel(Basket.name) private basketModel: Model<BasketModule>,
  ) {}

  // async getAll(): Promise<Game[]> {
  //   const games = await this.basketModel.find();
  //   return games;
  // }

  // async addGame(game: Game) {
  //   const games = await this.basketModel.find();
  //   games.push(game);
  //   await games.save();
  // }
}
