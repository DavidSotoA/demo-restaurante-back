import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import Model from './ModelInterface';
import Comida from "./Comida";
import {getManager, getConnection, getRepository} from "typeorm";

@Entity()
export default class TipoDeComida implements Model {

    private conn;
    constructor(conn) {
        this.conn = conn;
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column({ type: "text", nullable: true })
    descripcion: string

    @Column({ type: "text", nullable: true })
    imagen: string

    @OneToMany(type => Comida, comida => comida.tipoDeComida)
    comidas: Comida[]

    async comidass() {
        try {
            let v = this.conn.getRepository(TipoDeComida);
            return await v.find({ relations: ["comidas"] });
            // return await this.repo.find({ relations: ["comidas"] });   
        } catch (error) {
            console.log(error)
        }
    }

    public toString() {
        return 'TipoDeComida'
    }

    public get_grapQl_type(): string {
        return `type TipoDeComida {
            id: ID!
            nombre: String!
            descripcion: String
            imagen: String
            comidass: [Comida]
        }`
    }

    public get_grapQl_input(): string {
        return `input TipoDeComidaInput {
            nombre: String!
            descripcion: String
            imagen: String
        }`
    }

}