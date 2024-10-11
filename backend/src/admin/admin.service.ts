// admin.service.ts

import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AdminService {
  private apiKey = '7897059351:AAH_dW5uAU5Sb7wJWOIwn16qtEmzoML0Xbg';
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
