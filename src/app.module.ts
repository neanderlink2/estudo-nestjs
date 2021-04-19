import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ContasBancariasModule } from './contas-bancarias/contas-bancarias.module';
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
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        PessoasModule,
        DependentesModule,
        ContasBancariasModule
    ],
})
export class AppModule { }
