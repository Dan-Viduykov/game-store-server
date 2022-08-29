import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Game } from './../game/schemas/game.schema';

export type BasketDocument = Basket & Document;

@Schema()
export class Basket {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }] })
  games: Game[];
}

export const BasketSchema = SchemaFactory.createForClass(Basket);
