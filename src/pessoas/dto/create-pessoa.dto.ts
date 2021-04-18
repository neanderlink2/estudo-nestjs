import { TipoDocumento } from "../../bases/tipoDocumento";

export class CreatePessoaDto {
    nome: string;
    dataNascimento: Date;
    documento: string;
    tipoDocumento: TipoDocumento = "PESSOA_FISICA";
    biografia?: string;
}
