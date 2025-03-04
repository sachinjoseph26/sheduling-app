import { NestFactory } from '@nestjs/core';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
                .setTitle('API')
                .setDescription('API')
                .setVersion('1.0')
                .build();
  const documentFactory = () => SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,documentFactory);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3003);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger is running on: ${await app.getUrl()}/api`);
}
bootstrap();
