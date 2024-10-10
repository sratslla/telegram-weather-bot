import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User, UserSchema } from './user.schema';
import { TelegramBotService } from 'src/telegram-bot';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AdminModule,
  ],
  controllers: [UserController],
  providers: [UserService, TelegramBotService],
  exports: [UserService],
})
export class UserModule {}
