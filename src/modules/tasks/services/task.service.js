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
exports.TaskService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var task_entity_1 = require("../entities/task.entity");
var TaskService = /** @class */ (function () {
    function TaskService(taskRepository) {
        this.taskRepository = taskRepository;
    }
    TaskService.prototype.findAll = function () {
        return this.taskRepository.find();
    };
    TaskService.prototype.create = function (task) {
        return this.taskRepository.save(task);
    };
    TaskService.prototype.update = function (id, task) {
        return this.taskRepository.update(id, task);
    };
    TaskService.prototype.delete = function (id) {
        return this.taskRepository.delete(id);
    };
    TaskService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
