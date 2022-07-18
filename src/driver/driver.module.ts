import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from 'src/car/car.module';
import { DriverEntity } from './driver.entity';
import { DriverResolver } from './driver.resolver';
import { DriverService } from './driver.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([DriverEntity]),
    forwardRef(() => CarModule),
  ],
  providers: [DriverService, DriverResolver],
  exports: [DriverService],
})
export class DriverModule {}
