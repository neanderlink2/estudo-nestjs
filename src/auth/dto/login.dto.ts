import { IsString } from "class-validator";

export class LoginDto {
    @IsString()
    email: string;

    @IsString()
    senha: string;
}