import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.provider';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://allstars:GsaUjSNg5AmivqEe@cluster0.hjmgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  providers: [...databaseProviders],
  exports: [MongooseModule],
})
export class DatabaseModule {}
