import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Raça } from "./raça.entity.js";

@Module({
    imports: [
        TypeOrmModule.forFeature([Raça])
    ]
})
export class RaçaModule{}