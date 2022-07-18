import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarEntity } from './car.entity';
import { DriverService } from 'src/driver/driver.service';
import { CreateCarDTO } from './car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>,
    private readonly driverService: DriverService,
  ) {}

  async create(car: CreateCarDTO): Promise<CarEntity> {
    return this.carRepository.save(car);
  }

  async findAll(): Promise<CarEntity[]> {
    return this.carRepository.find();
  }

  async findOne(id: number): Promise<CarEntity> {
    return this.carRepository.findOneBy({ id });
  }
}
