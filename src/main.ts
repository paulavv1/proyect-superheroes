import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Superheroes API') // Título de la API
    .setDescription('API para gestionar superhéroes') // Descripción de la API
    .setVersion('1.0') // Versión de la API
    .build(); // Genera la configuración


  const document = SwaggerModule.createDocument(app, config); // Genera el documento de Swagger
  SwaggerModule.setup('api', app, document); // Define la ruta para acceder a la documentación

  await app.listen(3000);
}

bootstrap();
