import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateContasBancariaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
