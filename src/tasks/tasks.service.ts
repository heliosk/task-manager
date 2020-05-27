import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

	constructor(
		@InjectRepository(TaskRepository) 
		private taskRepository: TaskRepository
	) {}

	async getTaskById(id: number): Promise<Task> {
		const found = await this.taskRepository.findOne(id);
		
		if (!found) {
			throw new NotFoundException(`Task with ${id} not found`);
		}

		return found;
	}

	// getAllTasks(): Task[] {
	// 	return this.tasks;
	// }

	// getTaskWithFilters(filterDto: GetTasksFilterDto): Task[] {
	// 	const { status, search } = filterDto;
	// 	let tasks = this.getAllTasks();

	// 	if (status) {
	// 		tasks = tasks.filter(task => task.status === status);
	// 	}

	// 	if (search) {
	// 		tasks = tasks.filter(task => 
	// 			task.title.includes(search) ||
	// 			task.description.includes(search));
	// 	}

	// 	return tasks;
	// }

	// createTask(createTaskDto: CreateTaskDto): Task {
	// 	const { title, description } = createTaskDto;

	// 	const task: Task = {
	// 		id: uuidv1(),
	// 		title,
	// 		description,
	// 		status: TaskStatus.OPEN
	// 	};

	// 	this.tasks.push(task);
	// 	return task;
	// }

	// deleteTask(id: string): void {
	// 	const found = this.getTaskById(id);
	// 	this.tasks.filter(task => task.id !== found.id);
	// }

	// updateTaskStatus(id: string, status: TaskStatus): Task {
	// 	const task = this.getTaskById(id);
	// 	task.status = status;
	// 	return task;
	// }
}
