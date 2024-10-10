import { AdminService } from './admin/admin.service';
import { UserService } from './user/user.service';
export declare class TelegramBotService {
    private readonly adminService;
    private readonly userService;
    private bot;
    private subscribedUsers;
    constructor(adminService: AdminService, userService: UserService);
    private registerCommands;
    private sendWeatherUpdate;
    private sendWeatherUpdatesToAll;
    private loadSubscribedUsers;
    addSubscribedUser(chatId: number): void;
    removeSubscribedUser(chatId: number): void;
}
