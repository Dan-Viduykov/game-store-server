import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './game/game.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://danil:danil@cluster0.hef4lks.mongodb.net/game-store-server?retryWrites=true&w=majority',
    ),
    GameModule,
    BasketModule,
  ],
})
export class AppModule {}
