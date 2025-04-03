import { NestFactory } from '@nestjs/core'
import { env } from './utils/env.js'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

const PORT = Number(env('PORT', '3000'))

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(PORT)
  console.log(`Server is running on port ${PORT}`)
}
bootstrap()
