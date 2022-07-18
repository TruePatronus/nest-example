import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverEntity } from './driver.entity';
import { CreateDriverDTO } from './driver.dto';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(DriverEntity)
    private readonly driverRepository: Repository<DriverEntity>,
  ) {}

  async create(driver: CreateDriverDTO): Promise<DriverEntity> {
    return this.driverRepository.save(driver);
  }

  async findAll(): Promise<DriverEntity[]> {
    return this.driverRepository.find();
  }

  async findOne(id: string): Promise<DriverEntity> {
    return this.driverRepository.findOne({ where: { id } });
  }
}
