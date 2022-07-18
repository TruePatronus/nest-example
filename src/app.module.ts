import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import { DriverModule } from './driver/driver.module';
import connectionOptions from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot(connectionOptions),
    CarModule,
    DriverModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
