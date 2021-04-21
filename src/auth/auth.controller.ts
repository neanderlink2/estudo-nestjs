import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../common/public-route.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @Post('login')
    async login(@Request() req, @Body() login: LoginDto) {
        const usuario = await this.authService.validateUser(login.email, login.senha);
        return this.authService.login(usuario);
    }

    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
