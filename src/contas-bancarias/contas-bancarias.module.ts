import { Module } from '@nestjs/common';
import { ContasBancariasService } from './contas-bancarias.service';
import { ContasBancariasResolver } from './contas-bancarias.resolver';

@Module({
  providers: [ContasBancariasResolver, ContasBancariasService]
})
export class ContasBancariasModule {}
