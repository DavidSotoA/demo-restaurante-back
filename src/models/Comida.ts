import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import Model from './ModelInterface';
import TipoDeComida from './TipoDeComida';
import {getManager, getConnection} from "typeorm";

@Entity()
export default class Comida implements Model {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column({ type: "text" })
    descripcion: string

    @Column()
    precio: number

    @Column()
    imagen: string

    @Column({ default: 0 })
    estrellas: number

    @ManyToOne(type => TipoDeComida, tipoDeComida => tipoDeComida.comidas)
    tipoDeComida: TipoDeComida;


    public toString() {
        return 'Comida'
    }

    public get_grapQl_type(): string {
        return `type Comida {
            id: ID!
            nombre: String!
            descripcion: String!
            precio: Int!
            imagen: String!
            estrellas: Int
            tipoDeComida: ID!
        }`
    }

    public get_grapQl_input(): string {
        return `input ComidaInput {
            nombre: String!
            descripcion: String!
            precio: Int!
            imagen: String!
            estrellas: Int
            tipoDeComida: ID!
        }`
    }

}
