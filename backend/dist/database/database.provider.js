"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => {
            try {
                const uri = process.env.MONGODB_URI;
                const connection = await mongoose.connect(uri);
                return connection;
            }
            catch (error) {
                console.error('MongoDB connection error:', error);
                throw error;
            }
        },
    },
];
//# sourceMappingURL=database.provider.js.map