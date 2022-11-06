import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000
  await app.listen(port);
  console.log(`Listening On Port ${port}`)

  if (module.hot) { // new !
    module.hot.accept(); // new !
    module.hot.dispose(() => app.close()); // new !
  } // new !
}
bootstrap();
