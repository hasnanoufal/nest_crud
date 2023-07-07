import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key:string;

    @Column({ length: 25 })
    name:string;

    @Column({ length: 25 })
    email:string;

    @Column({ length: 25 })
    password:string;
}
