import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../common/entity";
import { Pessoa } from "../../pessoas/entities/pessoa.entity";

@Entity()
export class Dependente extends BaseEntity {
    constructor(
        nome: string,
        responsavel: Pessoa
    ) {
        super();
        this.nome = nome;
        this.responsavel = responsavel;
    }

    @Column()
    nome: string;

    @ManyToOne(_ => Pessoa, pessoa => pessoa.dependentes)
    @JoinColumn()
    responsavel: Pessoa;
}
