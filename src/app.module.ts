import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MikroOrmModule, MikroOrmMiddleware } from '@mikro-orm/nestjs';
import { MikroORM } from '@mikro-orm/postgresql';

@Module({
  imports: [PostsModule, MikroOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule, OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up();
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MikroOrmMiddleware).forRoutes('*');
  }
}
