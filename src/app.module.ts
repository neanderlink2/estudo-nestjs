import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { DependentesModule } from './dependentes/dependentes.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mssql',
            host: 'database',
            port: 1433,
            username: 'sa',
            password: 'admin*123',
            database: 'test',
            autoLoadEntities: true,
            synchronize: true,
        }),
        PessoasModule,
        DependentesModule,
        AuthModule,
        UsuariosModule
    ],
    providers: [{
        provide: APP_GUARD,
        useClass: JwtAuthGuard,
    }]
})
export class AppModule { }
