import { PartialType } from '@nestjs/swagger';
import { CreateDependenteDto } from './create-dependente.dto';

export class UpdateDependenteDto extends PartialType(CreateDependenteDto) {}
