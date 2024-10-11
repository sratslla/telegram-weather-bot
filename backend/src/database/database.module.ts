import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.provider';
import { config } from 'dotenv';
config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI)],
  providers: [...databaseProviders],
  exports: [MongooseModule],
})
export class DatabaseModule {}
