import{
    Entity, 
    PrimaryGeneratedColumn,
    Column
}from 'typeorm';

@Entity('pet')

export class Pet{
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({length:100})
    nome!: string; 

    @Column ({type: 'date'})
    dataNascimento!: Date;

    @Column({length:100})
    sexo!: string; 

    @Column({type: 'int'})
    peso!: number;

    @Column({length:100})
    cor!: string; 

    @Column({default: true})
    castrado!: boolean; 

    @Column({default: true})
    ativo!: boolean; 
}