import{
    Entity,
    PrimaryGeneratedColumn, 
    Column
}from 'typeorm'; 

@Entity ('origem')

export class Origem{
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({length:100})
    continente!:string;

    @Column({length:100})
    pais!: string; 

    @Column({length:100})
    regiao!: string; 

    @Column({length:100})
    descricao!: string; 

    @Column({default: true})
    ativo!: boolean; 
}