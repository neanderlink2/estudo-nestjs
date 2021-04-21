import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {
    @IsString({ message: 'E-mail inválido.' })
    @MaxLength(255, { message: 'O e-mail deve possuir no máximo 255 caracteres.' })
    @MinLength(2, { message: 'O e-mail deve possuir no mínimo 2 caracteres.' })
    @IsEmail({}, { message: 'E-mail digitado é inválido' })
    email: string;

    @IsNotEmpty({ message: 'A senha é obrigatória.' })
    @MinLength(6, { message: 'A senha deve possuir no mínimo 6 caracteres.' })
    senha: string;
}
