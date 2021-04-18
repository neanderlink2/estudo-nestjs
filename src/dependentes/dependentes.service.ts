import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from '../pessoas/entities/pessoa.entity';
import { CreateDependenteDto } from './dto/create-dependente.dto';
import { UpdateDependenteDto } from './dto/update-dependente.dto';
import { Dependente } from './entities/dependente.entity';

@Injectable()
export class DependentesService {
  constructor(
    @InjectRepository(Dependente)
    private readonly dependentesRepository: Repository<Dependente>,
    @InjectRepository(Pessoa)
    private readonly pessoasRepository: Repository<Pessoa>
  ) { }

  async create(dto: CreateDependenteDto) {
    const pessoa = await this.pessoasRepository.findOne(dto.responsavelId);
    if (!pessoa) {
      return null;
    }
    return this.dependentesRepository.save({
      nome: dto.nome,
      responsavel: pessoa
    });
  }

  findAll() {
    return this.dependentesRepository.find();
  }

  findOne(id: number) {
    return this.dependentesRepository.findOne(id);
  }

  update(id: number, updateDependenteDto: UpdateDependenteDto) {
    return this.dependentesRepository.update(id, updateDependenteDto);
  }

  remove(id: number) {
    return this.dependentesRepository.delete(id);
  }
}
