import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoasRepository: Repository<Pessoa>
  ) { }

  async create(dto: CreatePessoaDto) {
    return await this.pessoasRepository.save(dto);
  }

  findAll() {
    return this.pessoasRepository.find();
  }

  findOne(id: number) {
    return this.pessoasRepository.findOne(id);
  }

  update(id: number, dto: UpdatePessoaDto) {
    return this.pessoasRepository.update(id, dto);
  }

  remove(id: number) {
    return this.pessoasRepository.delete(id);
  }
}
