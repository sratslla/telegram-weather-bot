import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  chatId: number;

  @Prop({ required: true })
  username: string;

  @Prop({ default: true })
  subscriptionstatus: boolean;

  @Prop({ default: false })
  blocked: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
