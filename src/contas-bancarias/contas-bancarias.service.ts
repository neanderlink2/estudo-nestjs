import { Injectable } from '@nestjs/common';
import { CreateContasBancariaInput } from './dto/create-contas-bancaria.input';
import { UpdateContasBancariaInput } from './dto/update-contas-bancaria.input';

@Injectable()
export class ContasBancariasService {
  create(createContasBancariaInput: CreateContasBancariaInput) {
    return 'This action adds a new contasBancaria';
  }

  findAll() {
    return `This action returns all contasBancarias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contasBancaria`;
  }

  update(id: number, updateContasBancariaInput: UpdateContasBancariaInput) {
    return `This action updates a #${id} contasBancaria`;
  }

  remove(id: number) {
    return `This action removes a #${id} contasBancaria`;
  }
}
