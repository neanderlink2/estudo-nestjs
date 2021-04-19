import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from '../pessoas/entities/pessoa.entity';
import { CriarDependenteHandler } from './commands/criarDependente.handler';
import { DependentesController } from './dependentes.controller';
import { DependentesService } from './dependentes.service';
import { Dependente } from './entities/dependente.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Dependente, Pessoa])],
  controllers: [DependentesController],
  providers: [CriarDependenteHandler, DependentesService]
})
export class DependentesModule { }
