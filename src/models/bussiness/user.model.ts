import { Role } from './../enum/user.enum';
import { IUser } from './../interfaces/user.interface';
import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";


@Entity('user')
export class User implements IUser {
    
    @ObjectIdColumn()
    id!: number;

    @Column({type: 'varchar', unique: true})
    email!: string;

    @Column({type: 'varchar'})
    name!: string;

    @Column({type: 'varchar'})
    password!: string;

    @Column({type: 'enum', enum: Role, default: Role.USER})
    role!: Role

    @Column({type: 'varchar', unique: true})
    document!: string;

    @Column({type: 'varchar', length: 11})
    phone!: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;

}

export default new User();