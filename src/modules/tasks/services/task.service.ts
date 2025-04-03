import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Task } from '../entities/task.entity'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAll() {
    return this.taskRepository.find()
  }

  create(task: Partial<Task>) {
    return this.taskRepository.save(task)
  }

  update(id: number, task: Partial<Task>) {
    return this.taskRepository.update(id, task)
  }

  delete(id: number) {
    return this.taskRepository.delete(id)
  }
}
