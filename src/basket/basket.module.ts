import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Game, GameSchema } from './../game/schemas/game.schema';
import { Basket, BasketSchema } from './basket.schema';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Basket.name, schema: BasketSchema }]),
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
  ],
  providers: [BasketService],
  controllers: [BasketController],
})
export class BasketModule {}
