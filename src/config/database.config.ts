// ormconfig.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export default {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'admin',
  password: '123435',
  database: 'db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
} as TypeOrmModuleOptions;
