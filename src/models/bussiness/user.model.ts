import { Role } from './../enum/user.enum';
import { IUser } from './../interfaces/user.interface';
import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";
import { ObjectID } from 'typeorm';

@Entity('user')
export class User implements IUser {
    
    @ObjectIdColumn()
    id!: ObjectID;

    @Column({ type: 'varchar', unique: true, nullable: false })
    email!: string;

    @Column({ type: 'varchar', nullable: false })
    name!: string;

    @Column({ type: 'varchar', nullable: false, length: 8 })
    password!: string;

    @Column({ type: 'enum', enum: Role, default: Role.USER, nullable: false })
    role!: Role;

    @Column({ type: 'varchar', unique: true, nullable: false })
    document!: string;

    @Column({ type: 'varchar', length: 11, nullable: false })
    phone!: string;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updatedAt!: Date;

}

export default new User();