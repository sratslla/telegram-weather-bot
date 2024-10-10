import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(chatId: number, username: string): Promise<User> {
    const user = new this.userModel({ chatId, username });
    return user.save();
  }

  async subscribeUser(chatId: number): Promise<User | null> {
    return this.userModel
      .findOneAndUpdate({ chatId }, { subscriptionstatus: true }, { new: true })
      .exec();
  }
  async unsubscribeUser(chatId: number): Promise<User | null> {
    return this.userModel
      .findOneAndUpdate(
        { chatId },
        { subscriptionstatus: false },
        { new: true },
      )
      .exec();
  }
  async blockUser(chatId: number, blocked: boolean): Promise<User | null> {
    console.log('Block inside Service');
    return this.userModel
      .findOneAndUpdate({ chatId }, { blocked }, { new: true })
      .exec();
  }

  async deleteUser(chatId: number): Promise<User | null> {
    return this.userModel.findOneAndDelete({ chatId }).exec();
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserByChatId(chatId: number): Promise<User | null> {
    return this.userModel.findOne({ chatId }).exec();
  }
}
