import{
    Entity, 
    PrimaryGeneratedColumn, 
    Column
}from 'typeorm'; 

@Entity('raça')

export class Raça{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length:100})
    nome!: string;

    @Column({length:100})
    porte!: string; 

    @Column({length:100})
    descricao!: string;

    @Column({type: 'int'})
    expectativaVida: number;

    @Column({default: true})
    ativo!: boolean; 
}