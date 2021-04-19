import { Test, TestingModule } from '@nestjs/testing';
import { ContasBancariasResolver } from './contas-bancarias.resolver';
import { ContasBancariasService } from './contas-bancarias.service';

describe('ContasBancariasResolver', () => {
  let resolver: ContasBancariasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContasBancariasResolver, ContasBancariasService],
    }).compile();

    resolver = module.get<ContasBancariasResolver>(ContasBancariasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
