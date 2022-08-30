import { Basket, BasketSchema } from './basket.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Basket.name, schema: BasketSchema }]),
  ],
  providers: [BasketService],
  controllers: [BasketController],
})
export class BasketModule {}
