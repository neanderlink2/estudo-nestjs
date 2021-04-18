import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DependentesModule } from './dependentes/dependentes.module';
import { PessoasModule } from './pessoas/pessoas.module';

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
        DependentesModule
    ],
})
export class AppModule { }
