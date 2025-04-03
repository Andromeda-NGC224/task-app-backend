import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { TaskService } from '../services/task.service'
import { Task } from '../entities/task.entity'

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskService.findOne(id)
  }

  @Post()
  create(@Body() task: Partial<Task>) {
    return this.taskService.create(task)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() task: Partial<Task>) {
    return this.taskService.update(id, task)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.taskService.delete(id)
  }
}
