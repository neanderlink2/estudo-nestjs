import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pessoa } from "../../pessoas/entities/pessoa.entity";
import { Dependente } from "../entities/dependente.entity";
import { CriarDependenteCommand } from "./criarDependente.command";

@CommandHandler(CriarDependenteCommand)
export class CriarDependenteHandler implements ICommandHandler<CriarDependenteCommand> {
    constructor(
        @InjectRepository(Dependente)
        private dependentesRepository: Repository<Dependente>,
        @InjectRepository(Pessoa)
        private pessoasRepository: Repository<Pessoa>
    ) { }

    async execute(command: CriarDependenteCommand) {
        const pessoa = await this.pessoasRepository.findOne(command.responsavelId);
        if (!pessoa) {
            return null;
        }

        return this.dependentesRepository.save({
            nome: command.nome,
            responsavel: pessoa
        });
    }
}