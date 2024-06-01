import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';

import { EntityRepository } from '@mikro-orm/core';
import { Post } from './post.entities';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: EntityRepository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postRepository.findAll();
  }
}
