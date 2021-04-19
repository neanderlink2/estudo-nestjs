import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContasBancariasService } from './contas-bancarias.service';
import { ContasBancaria } from './entities/contas-bancaria.entity';
import { CreateContasBancariaInput } from './dto/create-contas-bancaria.input';
import { UpdateContasBancariaInput } from './dto/update-contas-bancaria.input';

@Resolver(() => ContasBancaria)
export class ContasBancariasResolver {
  constructor(private readonly contasBancariasService: ContasBancariasService) {}

  @Mutation(() => ContasBancaria)
  createContasBancaria(@Args('createContasBancariaInput') createContasBancariaInput: CreateContasBancariaInput) {
    return this.contasBancariasService.create(createContasBancariaInput);
  }

  @Query(() => [ContasBancaria], { name: 'contasBancarias' })
  findAll() {
    return this.contasBancariasService.findAll();
  }

  @Query(() => ContasBancaria, { name: 'contasBancaria' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contasBancariasService.findOne(id);
  }

  @Mutation(() => ContasBancaria)
  updateContasBancaria(@Args('updateContasBancariaInput') updateContasBancariaInput: UpdateContasBancariaInput) {
    return this.contasBancariasService.update(updateContasBancariaInput.id, updateContasBancariaInput);
  }

  @Mutation(() => ContasBancaria)
  removeContasBancaria(@Args('id', { type: () => Int }) id: number) {
    return this.contasBancariasService.remove(id);
  }
}
