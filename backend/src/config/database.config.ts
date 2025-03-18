import { registerAs } from '@nestjs/config';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;

export default registerAs('database', () => ({
  type: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT ?? '3306', 10),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: NODE_ENV !== 'production',
  autoLoadEntities: true,
}));
