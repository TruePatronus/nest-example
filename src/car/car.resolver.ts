import { Inject, Query } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DriverService } from 'src/driver/driver.service';
import { CreateCarDTO } from './car.dto';
import { CarEntity } from './car.entity';
import { CarService } from './car.service';

@Resolver('Car')
export class CarResolver {
  constructor(
    @Inject(CarService) private carService: CarService,
    @Inject(DriverService) private driverService: DriverService,
  ) {}

  async find(@Query('car') id: number): Promise<CarEntity> {
    return this.carService.findOne(id);
  }

  async findAll(): Promise<CarEntity[]> {
    return this.carService.findAll();
  }

  @Mutation(() => CarEntity)
  async createCar(
    @Args('createCar') createCarDTO: CreateCarDTO,
  ): Promise<CarEntity> {
    return await this.carService.create(createCarDTO);
  }
}
