import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'mysql',
	host: 'x',
	port: 3306,
	username: 'x',
	password: 'x',
	database: 'x',
	entities: [__dirname + '/../**/*.entity.ts'],
	synchronize: true
};