import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entities';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<Post[]> {
    return await this.postsService.findAll();
  }
}
