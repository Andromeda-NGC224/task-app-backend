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
const postgresUrl = env('DATABASE_URL')

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: postgresUrl,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false, // відображення SSL-помилок
        },
      },
      host: postgresHost || 'localhost',
      port: parseInt(postgresPort, 10) || 5432,
      username: postgresUser,
      password: postgresPassword,
      database: postgresName,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
