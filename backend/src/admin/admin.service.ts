// admin.service.ts

import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AdminService {
  private apiKey = '8171646977:AAEXoDfkZ0YA4qxe4FqH5cXQxZEtYLuX8gs';
  private users: string[] = [];

  getApiKey(): string {
    return this.apiKey;
  }

  setApiKey(key: string): string {
    this.apiKey = key;
    return 'API key updated successfully';
  }

  getUsers(): string[] {
    return this.users;
  }
}
