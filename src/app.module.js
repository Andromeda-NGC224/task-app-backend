"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var task_module_1 = require("./modules/tasks/task.module");
var config_1 = require("@nestjs/config");
var env_js_1 = require("./utils/env.js");
var postgresHost = (0, env_js_1.env)('POSTGRESDB_HOST');
var postgresPort = (0, env_js_1.env)('POSTGRESDB_PORT');
var postgresUser = (0, env_js_1.env)('POSTGRESDB_USER');
var postgresPassword = (0, env_js_1.env)('POSTGRESDB_PASSWORD');
var postgresName = (0, env_js_1.env)('POSTGRESDB_NAME');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot(),
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: postgresHost || 'localhost',
                    port: parseInt(postgresPort, 10) || 5432,
                    username: postgresUser,
                    password: postgresPassword,
                    database: postgresName,
                    autoLoadEntities: true,
                    synchronize: true,
                }),
                task_module_1.TaskModule,
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
