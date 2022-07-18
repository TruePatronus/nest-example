import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDriverDTO {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  phone: number;
}
