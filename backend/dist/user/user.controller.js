"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const telegram_bot_1 = require("../telegram-bot");
let UserController = class UserController {
    constructor(userService, telegramBotService) {
        this.userService = userService;
        this.telegramBotService = telegramBotService;
    }
    async getAllUsers() {
        return this.userService.getUsers();
    }
    async blockUser(chatId) {
        const user = await this.userService.getUserByChatId(chatId);
        if (user) {
            const blockedUser = await this.userService.blockUser(chatId, !user.blocked);
            const message = user.blocked
                ? 'User Unblocked successfully'
                : 'User Blocked successfully';
            if (blockedUser && blockedUser.blocked) {
                this.telegramBotService.removeSubscribedUser(chatId);
            }
            else if (blockedUser && !blockedUser.blocked) {
                this.telegramBotService.addSubscribedUser(chatId);
            }
            return { message };
        }
    }
    async deleteUser(chatId) {
        const deletedUser = await this.userService.deleteUser(chatId);
        this.telegramBotService.removeSubscribedUser(chatId);
        if (deletedUser) {
            return { message: 'User deleted successfully' };
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Post)('/block/:chatId'),
    __param(0, (0, common_1.Param)('chatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "blockUser", null);
__decorate([
    (0, common_1.Delete)(':chatId'),
    __param(0, (0, common_1.Param)('chatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        telegram_bot_1.TelegramBotService])
], UserController);
//# sourceMappingURL=user.controller.js.map