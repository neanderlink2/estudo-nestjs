import { CreateContasBancariaInput } from './create-contas-bancaria.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContasBancariaInput extends PartialType(CreateContasBancariaInput) {
  @Field(() => Int)
  id: number;
}
