import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './post.entities';

@Module({
  controllers: [PostsController],
  imports: [MikroOrmModule.forFeature({ entities: [Post] })],
  providers: [PostsService],
})
export class PostsModule {}
