import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './car.entity';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { DriverModule } from 'src/driver/driver.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarEntity]),
    forwardRef(() => DriverModule),
  ],
  providers: [CarService, CarResolver],
  exports: [CarService],
})
export class CarModule {}
