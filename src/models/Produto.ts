import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";
import { meuDataSource } from "../data-source";

@Entity("produtos")
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "text"})
    nome:string;
    @Column({type: "text"})
    descrição:string
    @Column({type: "text"})
    imagem:string
}

export const produtorep = meuDataSource.getRepository(Produto);