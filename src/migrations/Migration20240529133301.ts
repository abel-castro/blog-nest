import { Migration } from '@mikro-orm/migrations';

export class Migration20240529133301 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "post" ("id" serial primary key, "title" varchar(255) not null, "content" varchar(255) not null);',
    );
  }
}
