import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/entity";
import { TipoDocumento } from "../../common/tipoDocumento";
import { Dependente } from "../../dependentes/entities/dependente.entity";

@Entity()
export class Pessoa extends BaseEntity {
    constructor(nome: string,
        dataNascimento: Date,
        documento: string,
        tipoDocumento: TipoDocumento,
        biografia?: string
    ) {
        super();
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.documento = documento;
        this.tipoDocumento = tipoDocumento;
        this.biografia = biografia;
    }

    @Column()
    nome: string;

    @Column()
    dataNascimento: Date;

    @Column()
    documento: string;

    @Column()
    tipoDocumento: TipoDocumento;

    @Column({ nullable: true })
    biografia?: string;

    @OneToMany(_ => Dependente, dep => dep.responsavel)
    dependentes: Dependente[]
}