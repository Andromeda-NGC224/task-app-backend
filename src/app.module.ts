import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskModule } from './modules/tasks/task.module'
import { ConfigModule } from '@nestjs/config'
import { env } from './utils/env.js'

const postgresHost = env('POSTGRESDB_HOST')
const postgresPort = env('POSTGRESDB_PORT')
const postgresUser = env('POSTGRESDB_USER')
const postgresPassword = env('POSTGRESDB_PASSWORD')
const postgresName = env('POSTGRESDB_NAME')

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL
        ? {
            rejectUnauthorized: false,
          }
        : false,
      extra: {
        ssl: {
          rejectUnauthorized: false, // відображення SSL-помилок
        },
      },
      host: process.env.DATABASE_URL ? null : postgresHost,
      port: process.env.DATABASE_URL ? null : parseInt(postgresPort, 10),
      username: process.env.DATABASE_URL ? null : postgresUser,
      password: process.env.DATABASE_URL ? null : postgresPassword,
      database: process.env.DATABASE_URL ? null : postgresName,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
