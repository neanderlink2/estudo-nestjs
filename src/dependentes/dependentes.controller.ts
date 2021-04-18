import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DependentesService } from './dependentes.service';
import { CreateDependenteDto } from './dto/create-dependente.dto';
import { UpdateDependenteDto } from './dto/update-dependente.dto';

@ApiTags('dependentes')
@Controller('dependentes')
export class DependentesController {
  constructor(private readonly dependentesService: DependentesService) { }

  @Post()
  create(@Body() createDependenteDto: CreateDependenteDto) {
    return this.dependentesService.create(createDependenteDto);
  }

  @Get()
  findAll() {
    return this.dependentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dependentesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDependenteDto: UpdateDependenteDto) {
    return this.dependentesService.update(+id, updateDependenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dependentesService.remove(+id);
  }
}
