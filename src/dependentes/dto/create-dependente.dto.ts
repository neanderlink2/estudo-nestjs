import { IsInt, IsNotEmpty, IsPositive, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateDependenteDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'O nome deve possuir no mínimo 2 caracteres.' })
    @MaxLength(255, { message: 'O nome deve possuir no máximo 255 caracteres.' })
    nome: string;

    @IsInt()
    @IsPositive({ message: 'O ID do responsável deve ser positivo.' })
    @Min(1, { message: 'O ID do responsável deve ser maior que zero.' })
    responsavelId: number;
}
