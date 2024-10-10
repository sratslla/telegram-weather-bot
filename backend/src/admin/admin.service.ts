// admin.service.ts

import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
config();

@Injectable()
export class AdminService {
  private apiKey = process.env.TELEGRAM_BOT_TOKEN;
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
