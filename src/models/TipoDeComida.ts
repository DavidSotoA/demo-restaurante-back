import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class TipoDeComida {

    @PrimaryGeneratedColumn()
    id :number

    @Column()
    nombre :string 

    @Column({ type: "text", nullable: true})
    descripcion :string

    @Column({ type: "text", nullable: true})
    imagen :string
}