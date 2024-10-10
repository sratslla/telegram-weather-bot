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
        const uri = process.env.MONGODB_URI;

        const connection = await mongoose.connect(uri);

        return connection;
      } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
      }
    },
  },
];
