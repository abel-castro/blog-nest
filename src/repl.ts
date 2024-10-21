import 'tsconfig-paths/register';

import { repl } from '@nestjs/core';
import { AppModule } from './app.module';
import { MikroORM } from '@mikro-orm/core';
import { commonMikroOrmConfig } from './mikro-orm.config';
import { Post } from './posts/post.entities';

async function bootstrap() {
  const replContext = (await repl(AppModule)).context;

  const orm = await MikroORM.init({
    ...commonMikroOrmConfig,
    allowGlobalContext: true,
    entitiesTs: ['./**/*.entities.ts'],
    entities: ['./dist/**/*.entities.js'],
    discovery: {
      warnWhenNoEntities: false,
    },
  });

  replContext.Post = Post;

  replContext.orm = orm;
  replContext.em = orm.em;
}
bootstrap();
