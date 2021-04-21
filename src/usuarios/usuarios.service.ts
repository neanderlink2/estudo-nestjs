import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuariosRepository: Repository<Usuario>
    ) { }

    async findOne(email: string) {
        return this.usuariosRepository.findOne({ email });
    }

    async create(dto: CreateUserDto) {
        const user = new Usuario(dto.email, dto.senha);
        return await this.usuariosRepository.save(user);
    }

    async atualizarUltimoLogin(email: string) {
        const usuario = await this.findOne(email);
        usuario.atualizarUltimoLogin();
        return this.usuariosRepository.save(usuario);
    }
}
