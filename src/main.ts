import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DatabaseExceptionFilter } from './infrastructure/databaseException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new DatabaseExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/v1/api')

  const config = new DocumentBuilder()
    .setTitle('Primeira API com NEST JS')
    .setDescription("Essa é a primeira API criada utilizando o NEST, com intuito de aprendizagem.")
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
