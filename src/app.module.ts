import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './game/game.module';
import { BasketModule } from './basket/basket.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://danil:danil@cluster0.hef4lks.mongodb.net/game-store-server?retryWrites=true&w=majority',
    ),
    GameModule,
    BasketModule,
    FileModule,
  ],
})
export class AppModule {}
