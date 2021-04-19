import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../common/entity';

@ObjectType()
export class ContasBancaria extends BaseEntity {
  @Field({ description: 'Número da conta', nullable: false })
  numeroConta: string;

  @Field({ nullable: false })
  digitoVerificador: string;

  @Field({ nullable: false })
  numeroDocumento: string;

  @Field(type => Int, { nullable: false })
  anoCriacao: number
}
