<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive guide on nestjs authentication and authorization</p>
    <p align="center">

## Description

The repo covers mostly on authenticaton and authorization using passportjs and jwt

## Installation

```bash
$ npm install
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

### schema structure

```bash
  input CreateUserInput {
  password: String!
  username: String!
}

type Login {
  access_token: String!
  user: User!
}

input LoginDto {
  password: String!
  username: String!
}

type Mutation {
  createUser(userDto: CreateUserInput!): User!
  login(loginDto: LoginDto!): Login!
  signup(signupDto: LoginDto!): User!
}

type Query {
  user(username: String!): User!
  users: [User!]!
}

type User {
  id: Int!
  username: String!
}
```

### connecting graphql

```bash
  @Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
    AuthModule,
  ],
  providers: [ConfigService],
})
export class AppModule {}

```

## Stay in touch

- Author - [Kennedy Muthuri](https://muthuri.vercel.app/)

## License

Nest is [MIT licensed](LICENSE).
