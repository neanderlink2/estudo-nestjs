import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../common/public-route.decorator';
import { CreateUserDto } from './dto/createUser.dto';
import { UsuariosService } from './usuarios.service';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
    constructor(
        private readonly usuariosService: UsuariosService,
    ) { }

    @Public()
    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.usuariosService.create(user);
    }
}
