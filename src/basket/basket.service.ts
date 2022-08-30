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

  async getAll() {
    const games = await this.basketModel.find();
  }
}
