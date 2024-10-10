/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminService } from './admin/admin.service';
import { TelegramBotService } from './telegram-bot';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    AdminModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://allstars:GsaUjSNg5AmivqEe@cluster0.hjmgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AdminService, TelegramBotService],
})
export class AppModule {}
