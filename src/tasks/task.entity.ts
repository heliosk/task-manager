import { TaskStatus } from './task-status.enum';
import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Task extends BaseEntity {
	@PrimaryColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	status: TaskStatus;
}