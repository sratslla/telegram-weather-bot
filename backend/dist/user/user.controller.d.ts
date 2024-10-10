import { UserService } from './user.service';
import { User } from './user.schema';
import { TelegramBotService } from '../telegram-bot';
export declare class UserController {
    private readonly userService;
    private readonly telegramBotService;
    constructor(userService: UserService, telegramBotService: TelegramBotService);
    getAllUsers(): Promise<User[]>;
    blockUser(chatId: number): Promise<{
        message: string;
    }>;
    deleteUser(chatId: number): Promise<{
        message: string;
    }>;
}
