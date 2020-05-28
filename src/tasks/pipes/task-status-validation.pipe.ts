import { TaskStatus } from './../task-status.enum';
import { PipeTransform, BadRequestException } from '@nestjs/common';

export class TaskStatusValidationPipe implements PipeTransform {
	readonly allowedStatuses = [
		TaskStatus.OPEN,
		TaskStatus.IN_PROGRESS,
		TaskStatus.DONE
	];

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	transform(value: any): any {
		value = value.toUpperCase();

		if (!this.isStatusValid(value)) {
			throw new BadRequestException(`${value} is an invalid status`);
		}

		return value;
	}

	private isStatusValid(status: any) {
		const idx = this.allowedStatuses.indexOf(status);
		return idx !== -1;
	}
}