import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(chatId: number, username: string): Promise<User>;
    subscribeUser(chatId: number): Promise<User | null>;
    unsubscribeUser(chatId: number): Promise<User | null>;
    blockUser(chatId: number, blocked: boolean): Promise<User | null>;
    deleteUser(chatId: number): Promise<User | null>;
    getUsers(): Promise<User[]>;
    getUserByChatId(chatId: number): Promise<User | null>;
}
