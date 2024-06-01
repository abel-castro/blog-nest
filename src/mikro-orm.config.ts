import { PostgreSqlDriver } from '@mikro-orm/postgresql';

import { Options } from '@mikro-orm/core';
import { Post } from './posts/post.entities';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { SeedManager } from '@mikro-orm/seeder';
import { defineConfig } from '@mikro-orm/postgresql';


export default defineConfig({
  port: 5432,
  user: 'blog_user',
  password: 'blog_password',
  dbName: 'blog_db',
  entities: [Post],
  debug: true,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  // @ts-expect-error nestjs adapter option
  registerRequestContext: false,
  extensions: [Migrator, EntityGenerator, SeedManager],
});
