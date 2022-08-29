import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop()
  name: string;

  @Prop()
  studio: number;

  @Prop()
  publisher: string;

  @Prop()
  price: number;

  @Prop()
  date: string;

  @Prop()
  genre: string;

  @Prop()
  tags: string[];

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  picture: string;

  @Prop()
  video: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}

export const GameSchema = SchemaFactory.createForClass(Game);
