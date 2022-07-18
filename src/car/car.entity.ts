import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DriverEntity } from 'src/driver/driver.entity';
import { Field, ID } from '@nestjs/graphql';

@Entity()
export class CarEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  num: string;

  @Field()
  @Column()
  brand: string;

  @Field()
  @Column({ nullable: true })
  model: string;

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => [DriverEntity], { nullable: true })
  @OneToMany(() => DriverEntity, (driver) => driver.car)
  drivers: DriverEntity[];
}
