import { Test, TestingModule } from '@nestjs/testing';
import { DependentesController } from './dependentes.controller';
import { DependentesService } from './dependentes.service';

describe('DependentesController', () => {
  let controller: DependentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DependentesController],
      providers: [DependentesService],
    }).compile();

    controller = module.get<DependentesController>(DependentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
