import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCarDTO {
  @Field()
  num: string;

  @Field()
  brand: string;

  @Field({ nullable: true })
  model: string;
}
