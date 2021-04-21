import * as bcrypt from 'bcrypt';
import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../common/entity";

@Entity()
export class Usuario extends BaseEntity {
    constructor(
        email: string,
        senhaPlana: string
    ) {
        super();
        if (email) {
            this.email = email.toLowerCase();
        }
        if (senhaPlana) {
            const hash = bcrypt.hashSync(senhaPlana, bcrypt.genSaltSync());
            this.hashSenha = hash;
        }

        this.emailConfirmado = false;
    }

    @Column()
    email: string;

    @Column()
    hashSenha: string;

    @Column()
    emailConfirmado: boolean;

    @Column({ nullable: true })
    dataUltimoLogin?: Date;

    async validarSenha(senhaParaComparar: string) {
        const isMatch = await bcrypt.compare(senhaParaComparar, this.hashSenha);
        return isMatch;
    }

    atualizarUltimoLogin() {
        this.dataUltimoLogin = new Date();
    }
}