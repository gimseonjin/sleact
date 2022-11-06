import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal : true}), MorganModule, UsersModule],
  controllers: [],
  providers: [
    ConfigService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
