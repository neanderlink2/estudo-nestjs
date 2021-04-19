import { Test, TestingModule } from '@nestjs/testing';
import { ContasBancariasService } from './contas-bancarias.service';

describe('ContasBancariasService', () => {
  let service: ContasBancariasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContasBancariasService],
    }).compile();

    service = module.get<ContasBancariasService>(ContasBancariasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
