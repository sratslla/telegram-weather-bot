/* eslint-disable prettier/prettier */
// user/user.controller.ts

import { Controller, Get, Delete, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';
import { TelegramBotService } from '../telegram-bot';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly telegramBotService: TelegramBotService,
  ) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post('/block/:chatId')
  async blockUser(@Param('chatId') chatId: number) {
    const user = await this.userService.getUserByChatId(chatId);

    if (user) {
      const blockedUser = await this.userService.blockUser(
        chatId,
        !user.blocked,
      );
      const message = user.blocked
        ? 'User Unblocked successfully'
        : 'User Blocked successfully';

      // Update subscription based on blocked status
      if (blockedUser.blocked) {
        this.telegramBotService.removeSubscribedUser(chatId); // Blocked users are unsubscribed
      } else {
        this.telegramBotService.addSubscribedUser(chatId); // Unblocked users are resubscribed
      }

      return { message };
    }
  }

  @Delete(':chatId')
  async deleteUser(@Param('chatId') chatId: number) {
    const deletedUser = await this.userService.deleteUser(chatId);
    this.telegramBotService.removeSubscribedUser(chatId);
    if (deletedUser) {
      return { message: 'User deleted successfully' };
    }
  }
}
