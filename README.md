# Blog-nest

The purpose of this project is to learn how to work with [nestjs](https://nestjs.com) by creating a blog.

Project features:
- REST-API
- Mikro-ORM
- PostgresSQL DB running in Docker
- Swagger API docs 

## Installation

Install dependencies
```sh
$ npm install
```

Start the db
```sh
docker compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Project creation

This project was created using the nest cli by running following commands:

Install nest cli
```sh
npm install -g @nestjs/cli
```

Create new nest project
```sh
nest new blog-nest
```

Create module, controller and service
```sh
nest generate module posts
nest generate controller posts
nest generate service posts
```

## Learnings

- The `mikro-orm.config.ts` and `migrations` folder needs to be placed inside `src` otherwise we will get errors like this:

  ```sh
  SyntaxError: Cannot use import statement outside a module
  ```

- It is needed to run `npm run build` before running mikro-orm commands

- Create first migration run with
  `npx mikro-orm migration:create --initial`

- Following migrations can be created with
  `npm run mikro-orm -- migration:create`


## Inspiration
For inspiration and solving some issues in the project this repository was very usefull: https://github.com/mikro-orm/nestjs-realworld-example-app/blob/master/
