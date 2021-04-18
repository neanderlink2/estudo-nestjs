import { Test, TestingModule } from '@nestjs/testing';
import { DependentesService } from './dependentes.service';

describe('DependentesService', () => {
  let service: DependentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DependentesService],
    }).compile();

    service = module.get<DependentesService>(DependentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
