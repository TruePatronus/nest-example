import { Field, ID } from '@nestjs/graphql';
import { CarEntity } from 'src/car/car.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class DriverEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ nullable: true })
  phone: number;

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => CarEntity)
  @ManyToOne(() => CarEntity, (car) => car.drivers)
  car: CarEntity;
}
