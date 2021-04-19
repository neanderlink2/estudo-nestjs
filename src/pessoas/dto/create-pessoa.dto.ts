import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { TipoDocumento } from "../../common/tipoDocumento";


export class CreatePessoaDto {
    @IsString({ message: 'Nome inválido.' })
    @MaxLength(255, { message: 'O nome deve possuir no máximo 255 caracteres.' })
    @MinLength(2, { message: 'O nome deve possuir no mínimo 2 caracteres.' })
    nome: string;

    @IsNotEmpty({ message: 'A data de nascimento é obrigatória.' })
    dataNascimento: Date;

    @IsNotEmpty({ message: 'O número do documento é obrigatório' })
    @MinLength(8, { message: 'O documento deve possuir no mínimo 8 caracteres' })
    documento: string;

    @IsIn(['PESSOA_FISICA', 'PESSOA_JURIDICA'], { message: 'Serão aceitos apenas os tipos de documento PESSOA_FISICA e PESSOA_JURIDICA.' })
    @IsNotEmpty()
    tipoDocumento: TipoDocumento = "PESSOA_FISICA";

    @IsOptional()
    @MaxLength(255, { message: 'A biografia deve possuir no máximo 255 caracteres.' })
    biografia?: string;
}
