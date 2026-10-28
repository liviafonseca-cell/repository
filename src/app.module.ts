import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from './Clinica/tutor/tutor.entity.js';
import { Raça } from './Clinica/raça/raça.entity.js';
import { Pet } from './Clinica/pet/pet.entity.js';
import { Origem } from './Clinica/origem/origem.entity.js';
import { Especie } from './Clinica/especie/especie.entity.js';


@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      database: 'clinica_db',
      entities: [Tutor, Pet, Especie, Origem, Raça], 
      synchronize: true, 
      logging: true,
    })
  ]
})
export class AppModule {}
  
