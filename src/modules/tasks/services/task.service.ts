import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Task } from '../entities/task.entity'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find()
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } })
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`)
    }
    return task
  }

  async create(task: Partial<Task>): Promise<Task> {
    return await this.taskRepository.save(task)
  }

  async update(id: number, task: Partial<Task>): Promise<void> {
    const result = await this.taskRepository.update(id, task)
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`)
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`)
    }
  }
}
