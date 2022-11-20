import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './interceptor/exception.filter';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  if (module.hot) { // new !
    module.hot.accept(); // new !
    module.hot.dispose(() => app.close()); // new !
  } // new !

  const config = new DocumentBuilder()
    .setTitle('SLEACT API')
    .setDescription('This is for sleact project')
    .setVersion('1.0')
    .addTag('sleact')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`Listening On Port ${port}`)
}
bootstrap();
