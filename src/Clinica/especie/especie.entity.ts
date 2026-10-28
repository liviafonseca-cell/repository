import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column
}from 'typeorm';

@Entity ('especie')

export class Especie{
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({length:100})
    nomePopular!: string; 

    @Column({length:100})
    nomeCientifico!: string; 

    @Column({length:100})
    descricao!: string; 

    @Column({length:100})
    domestico!:string; 

    @Column({default: true})
    ativo!: boolean; 
}