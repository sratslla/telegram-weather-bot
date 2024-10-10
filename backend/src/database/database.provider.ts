/* eslint-disable prettier/prettier */
import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { config } from 'dotenv';
config();

export const databaseProviders: Provider[] = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      try {
        const uri =
          'mongodb+srv://allstars:GsaUjSNg5AmivqEe@cluster0.hjmgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

        const connection = await mongoose.connect(uri);

        return connection;
      } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
      }
    },
  },
];
