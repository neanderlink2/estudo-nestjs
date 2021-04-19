import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarDependenteCommand } from './commands/criarDependente.command';
import { CreateDependenteDto } from './dto/create-dependente.dto';
import { UpdateDependenteDto } from './dto/update-dependente.dto';
import { Dependente } from './entities/dependente.entity';

@Injectable()
export class DependentesService {
  constructor(
    @InjectRepository(Dependente)
    private readonly dependentesRepository: Repository<Dependente>,
    private readonly commandBus: CommandBus
  ) { }

  async create(dto: CreateDependenteDto) {
    return this.commandBus.execute(new CriarDependenteCommand(dto.nome, dto.responsavelId));
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
