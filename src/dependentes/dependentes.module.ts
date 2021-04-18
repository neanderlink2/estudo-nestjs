import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from '../pessoas/entities/pessoa.entity';
import { DependentesController } from './dependentes.controller';
import { DependentesService } from './dependentes.service';
import { Dependente } from './entities/dependente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dependente, Pessoa])],
  controllers: [DependentesController],
  providers: [DependentesService]
})
export class DependentesModule { }
