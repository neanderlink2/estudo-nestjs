import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
    constructor(
        private usuariosService: UsuariosService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string) {
        const user = await this.usuariosService.findOne(username);
        if (user) {
            const senhaValida = await user.validarSenha(pass);
            if (senhaValida) {
                const { hashSenha, ...result } = user;
                return result;
            }
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.email, sub: user.id };
        await this.usuariosService.atualizarUltimoLogin(user.email);
        return {
            accessToken: this.jwtService.sign(payload),
            createdAt: new Date().getTime(),
            user
        };
    }
}
